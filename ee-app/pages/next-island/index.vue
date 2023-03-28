<template>
  <LazyHydrate when-visible>

    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent subPages">
        <div class="row">
          <div class="col-xs-12 col-lg-12">
            <breadcrumbs_l1 pageTitle="Next Island"/>
            <section class="dataContent">

              <div class="dataHeader" style="border-left:none;border-right:none;">
                <h1>Visit Next Island Estates</h1>

                <p style="background: none;padding:1rem;">As mankind on earth evolved, wealth and technology drove centuries long Cold wars among the world’s most powerful entities. Those who refused to align with popular political and spiritual ideologies were left abandoned by their own nations.</p>
                <p style="background: none;padding:1rem;">Pleas for open discourse, common decency, and respect for our fellow man were met with hostility and suppression of national and local support. We will start anew on our new home planet, and create the utopia we have always dreamed of.</p>

                <div class="sideItemNav">
                  <h2>Crystal Resort Beach</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/next-island/crystal-resort-beach-lodge-2a/" class="btn-em primary">Crystal Resort Beach Lodge 2A</nuxt-link></li>
                    <li><nuxt-link to="/next-island/crystal-resort-beach-lodge-2b/" class="btn-em primary">Crystal Resort Beach Lodge 2B</nuxt-link></li>
                  </ul>

                  <h2>Serpentine Shops</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/next-island/serpentine-shop-2/" class="btn-em primary">Serpentine Shop 2</nuxt-link></li>
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
      title: 'Next Island Estates',
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
          content: 'Ever wanted to visit Next Island\'s estates before buying? Take a tour of the most beautiful housing from Entropia Universe.'
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