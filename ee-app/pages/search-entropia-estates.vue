<template>
  <LazyHydrate when-visible>

    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent">
        <div class="breadcrumbs">
          <a href="/">Home</a> <em class="bc-next"></em> <span>Search Estates</span>
        </div>
        <h1>Search Entropia Estates</h1>
        <section class="textContent search-cont">
          <div class="col-xs-12 col-lg-12">
            <div class="form-input">
              <input name="s" type="text" value="" placeholder="Search Estates" v-model="searchTerm" autocomplete="off" @keydown="searchEstates($event)">
            </div>
          </div>

          <div class="col-xs-12 col-lg-12">
            <div id="results" class="form-result two-rows">

              <div class="card-short" v-for="(event, index) in initialEstates">
                <p v-if="event.e_name !== ''">
                  <a :href="event.e_url">{{ event.e_name }}</a>
                </p>
                <p v-if="event.e_name === ''">No Resuls</p>
              </div>

            </div>
          </div>

        </section>
      </div>
      <Footer/>
    </main>

  </LazyHydrate>
</template>

<script>
import Header from "~/components/header";
import Footer from "~/components/footer";
import BackgroundEffect from "~/components/background-effect";
import LazyHydrate from 'vue-lazy-hydration';
export default {
  data() {
    return {
      searchTerm: '',
      initialEstates: null,
      results: null
    }
  },
  methods: {
    async searchEstates($event) {

      let search = await this.$supabase.from("estates_info").select('*').ilike('e_name', '%'+this.searchTerm.toLowerCase()+'%').order('e_name', { ascending: true });

      if (search.data.length === 0) {
        this.initialEstates = [{e_name: ''}];
      } else {
        this.initialEstates = search.data;
      }

    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'v1',
        id: 'scollbar'
      },
      title: 'Search Entropia Estates',
      link: [
        {
          rel: 'canonical',
          href: 'https://entropia.estate' + this.$route.fullPath
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Market data from auction about Player housing in Entropia Universe. And your first stop for virtual visits of Entropia estates.'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://entropia.estate' + this.$route.fullPath
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://entropia.estate' + this.$route.fullPath
        }
      ],
      style: [
      ],
      script: [
      ]
    }
  },
  modules: [],
  components: {LazyHydrate, Footer, Header, BackgroundEffect}
}
</script>