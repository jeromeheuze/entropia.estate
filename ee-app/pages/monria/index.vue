<template>
  <LazyHydrate when-visible>

    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent subPages">
        <div class="row">
          <div class="col-xs-12 col-lg-12">
            <breadcrumbs_l1 pageTitle="Monria"/>
            <section class="dataContent">

              <div class="dataHeader" style="border-left:none;border-right:none;">
                <h1>Visit Monria Estates</h1>

                <div class="sideItemNav">
                  <h2>Cthylla Towers</h2>
                  <p>Floor - 1</p>
                  <ul class="telep">
                    <li><nuxt-link to="/monria/cthylla-towers-1-a/" class="btn-em primary">Cthylla Towers 1 A</nuxt-link></li>
                    <li><nuxt-link to="/monria/cthylla-towers-2-a/" class="btn-em primary">Cthylla Towers 2 A</nuxt-link></li>
                    <li><nuxt-link to="/monria/cthylla-towers-3-a/" class="btn-em primary">Cthylla Towers 3 A</nuxt-link></li>
                    <li><nuxt-link to="/monria/cthylla-towers-4-a/" class="btn-em primary">Cthylla Towers 4 A</nuxt-link></li>
                    <li><nuxt-link to="/monria/cthylla-towers-5-a/" class="btn-em primary">Cthylla Towers 5 A</nuxt-link></li>
                    <li><nuxt-link to="/monria/cthylla-towers-6-a/" class="btn-em primary">Cthylla Towers 6 A</nuxt-link></li>
                  </ul>
                  <p>Floor - 2</p>
                  <ul class="telep">
                    <li><nuxt-link to="/monria/cthylla-towers-3-b/" class="btn-em primary">Cthylla Towers 3 B</nuxt-link></li>
                  </ul>
                  <p>Floor - 3</p>
                  <ul class="telep">
                    <li><nuxt-link to="/monria/cthylla-towers-6-c/" class="btn-em primary">Cthylla Towers 6 C</nuxt-link></li>
                  </ul>
                  <p>Floor - 4</p>
                  <ul class="telep">
                    <li><nuxt-link to="/monria/cthylla-towers-4-d/" class="btn-em primary">Cthylla Towers 4 D</nuxt-link></li>
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
      title: 'Monria Estates',
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
          content: 'Ever wanted to visit Monria\'s apartment and shops before buying? Take a tour of the most beautiful housing from Entropia Universe.'
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