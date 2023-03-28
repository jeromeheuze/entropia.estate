<template>
  <LazyHydrate when-visible>

    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent subPages">
        <div class="row">
          <div class="col-xs-12 col-lg-12">
            <breadcrumbs_l1 pageTitle="FOMA Asteroid"/>
            <section class="dataContent">

              <div class="dataHeader" style="border-left:none;border-right:none;">
                <h1>Visit FOMA Asteroid Estates</h1>

                <div class="sideItemNav">
                  <h2>Alpha East Estates</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/foma-asteroid/alpha-east-15c/" class="btn-em primary">Alpha East, 15C</nuxt-link></li>
                  </ul>
                  <h2>Alpha South Estates</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/foma-asteroid/alpha-south-15e/" class="btn-em primary">Alpha South, 15E</nuxt-link></li>
                  </ul>
                  <h2>Alpha West Estates</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/foma-asteroid/alpha-west-6h/" class="btn-em primary">Alpha West, 6H</nuxt-link></li>
                    <li><nuxt-link to="/foma-asteroid/alpha-west-11d/" class="btn-em primary">Alpha West, 11D</nuxt-link></li>
                  </ul>
                  <h2>Beta South Estates</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/foma-asteroid/beta-south-5e/" class="btn-em primary">Beta South, 5E</nuxt-link></li>
                  </ul>
                  <h2>FOMA Shops</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/foma-asteroid/foma-shop-26/" class="btn-em primary">F.O.M.A Shop #26</nuxt-link></li>
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
      title: 'FOMA Asteroid Estates',
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
          content: 'Ever wanted to visit FOMA Asteroid\'s apartment and shops before buying? Take a tour of the most beautiful housing from Entropia Universe.'
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