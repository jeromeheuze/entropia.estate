<template>
  <LazyHydrate when-visible>


    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent">
        <div class="breadcrumbs">
          <nuxt-link to="/">Home</nuxt-link> <em class="bc-next"></em> <span>Guides</span>
        </div>
        <h1>Guides</h1>
        <p style="text-align: center;">Want to know more about virtual real estates in Entropia Universe - learn from our guides and become a master of estates and shops player owned.</p>
        <section class="textContent" style="padding-bottom: 2rem;">
          <div class="row" v-if="guides.length">

            <div class="col-xs-12 col-sm-6 col-lg-4" v-for="guide of guides" :key="guide.slug">
              <div class="item-shortcut-cont" style="padding:3rem;">
                <nuxt-link :to="'/guides/'+guide.slug+'/'" class="item-icons-link" :title="guide.title">
                  <img :src="guide.img_thumb" class="item-icons" :alt="guide.title" style="max-width: 100%;border: 1px solid #8bdbff;">
                  <span>{{ guide.title }}</span></nuxt-link>
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
  data () {
    return {
      guides: []
    }
  },
  async asyncData({ $content }) {
    const guides = await $content('guides').only(['title', 'slug', 'img_thumb']).sortBy('createdAt', 'asc').fetch()

    return {
      guides
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'v1',
        id: 'scollbar'
      },
      title: 'Guides',
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
          content: 'Want to know more about virtual real estates in Entropia Universe - learn from our guides and become a master of estates and shops player owned'
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