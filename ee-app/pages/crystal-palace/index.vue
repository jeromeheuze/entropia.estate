<template>
  <LazyHydrate when-visible>

    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent subPages">
        <div class="row">
          <div class="col-xs-12 col-lg-12">
            <breadcrumbs_l1 pageTitle="Crystal Palace"/>
            <section class="dataContent">

                <div class="dataHeader" style="border-left:none;border-right:none;">
                  <h1>Visit Crystal Palace Estates</h1>

                  <div class="sideItemNav">
                    <h2>Crystal Palace Booths</h2>
                    <ul class="telep">
                      <li><nuxt-link to="/crystal-palace/crystal-palace-trade-booth-15/" class="btn-em primary">Crystal Palace Trade Booth 15</nuxt-link></li>
                    </ul>

                  </div>

                </div>

            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </main>

  </LazyHydrate>
</template>

<script>
import Header from "~/components/header";
import Footer from "~/components/footer";
import BackgroundEffect from "~/components/background-effect";
import breadcrumbs_l1 from '~/components/breadcrumbs_l1';
import LazyHydrate from 'vue-lazy-hydration';
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'v1',
        id: 'scollbar'
      },
      title: 'Crystal Palace Estates',
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
          content: 'Ever wanted to visit Crystal Palace\'s booth before buying? Take a tour of the most beautiful housing from Entropia Universe.'
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
  components: {LazyHydrate, Footer, Header, BackgroundEffect, breadcrumbs_l1}
}
</script>