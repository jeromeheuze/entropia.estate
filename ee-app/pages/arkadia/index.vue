<template>
  <LazyHydrate when-visible>

    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent subPages">
        <div class="row">
          <div class="col-xs-12 col-lg-12">
            <breadcrumbs_l1 pageTitle="Arkadia"/>
            <section class="dataContent">

              <div class="dataHeader" style="border-left:none;border-right:none;">
                <h1>Visit Arkadia Estates</h1>

                <p style="background: none;padding:1rem;">Arkadia was discovered from a hidden signal that was decoded which was shrouded in mystery.A planet that is littered in secrets and an ancient history. Every turn reveals a new code to break, a riddle to solve and hidden treasures to be found.</p>
                <p style="background: none;padding:1rem;">Controlled by a military faction, life is booming but the shadows reveal an underground market littered with danger. You can become anything you desire but the real question is... at what cost?</p>

                <div class="sideItemNav">
                  <h2>Celeste Harbor Estates</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/arkadia/celeste-north-3/" class="btn-em primary">Celeste North 3</nuxt-link></li>
                    <li><nuxt-link to="/arkadia/celeste-north-8-lvl-6/" class="btn-em primary">Celeste North 8 Lvl 6</nuxt-link></li>
                    <li><nuxt-link to="/arkadia/celeste-harbour-booth-4/" class="btn-em primary">Celeste Harbour Booth #4</nuxt-link></li>
                  </ul>
                  <h2>Celeste Island Estates</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/arkadia/celeste-island-3-lvl-1/" class="btn-em primary">Celeste Island 3 Lvl 1</nuxt-link></li>
                  </ul>
                  <h2>Sanctuary Cove Estates</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/arkadia/sanctuary-cove-6/" class="btn-em primary">Sanctuary Cove 6</nuxt-link></li>
                    <li><nuxt-link to="/arkadia/sanctuary-cove-7/" class="btn-em primary">Sanctuary Cove 7</nuxt-link></li>
                    <li><nuxt-link to="/arkadia/sanctuary-cove-8/" class="btn-em primary">Sanctuary Cove 8</nuxt-link></li>
                    <li><nuxt-link to="/arkadia/sanctuary-cove-9/" class="btn-em primary">Sanctuary Cove 9</nuxt-link></li>
                    <li><nuxt-link to="/arkadia/sanctuary-cove-10/" class="btn-em primary">Sanctuary Cove 10</nuxt-link></li>
                    <li><nuxt-link to="/arkadia/sanctuary-cove-11/" class="btn-em primary">Sanctuary Cove 11</nuxt-link></li>
                    <li><nuxt-link to="/arkadia/sanctuary-cove-12/" class="btn-em primary">Sanctuary Cove 12</nuxt-link></li>
                  </ul>
                  <h2>Valiant Firebase Estates</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/arkadia/valiant-firebase-shop-1/" class="btn-em primary">Valiant Firebase Shop No 1</nuxt-link></li>
                  </ul>
                  <h2>Victorious Firebase Estates</h2>
                  <ul class="telep">
                    <li><nuxt-link to="/arkadia/victorious-firebase-shop-1/" class="btn-em primary">Victorious Firebase Shop #1</nuxt-link></li>
                    <li><nuxt-link to="/arkadia/victorious-firebase-estate-6/" class="btn-em primary">Victorious Firebase Estate #6</nuxt-link></li>
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
import LazyHydrate from 'vue-lazy-hydration';
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'v1',
        id: 'scollbar'
      },
      title: 'Arkadia Estates',
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
          content: 'Ever wanted to visit Arkadia\'s apartment before buying? Take a tour of the most beautiful housing from Entropia Universe.'
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