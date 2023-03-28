<template>
  <LazyHydrate when-visible>

    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent">
        <div class="breadcrumbs">
          <a href="/">Home</a> <em class="bc-next"></em> <span>Page Not Found - {{ error.statusCode }}</span>
        </div>
        <h1>Page Not Found - try this instead</h1>
        <section class="container dataContent" style="text-align: center;">
          <div class="textContent">
            <div class="row">

              <div class="col-xs-12 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/deeds-condos-shops-estates/" class="item-icons-link" title="View all Estate Deeds auctions">
                    <img src="/img/icons/deeds_icon.png" class="item-icons" alt="View all Estate Deeds auctions">
                    <span>Estate Deeds 2020</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/deeds-condos-shops-estates-2021/" class="item-icons-link" title="View all Estate Deeds auctions">
                    <img src="/img/icons/deeds_icon.png" class="item-icons" alt="View all Estate Deeds auctions">
                    <span>Estate Deeds 2021</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/deeds-condos-shops-estates-2022/" class="item-icons-link" title="View all Estate Deeds auctions">
                    <img src="/img/icons/deeds_icon.png" class="item-icons" alt="View all Estate Deeds auctions">
                    <span>Estate Deeds 2022</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/arkadia/" class="item-icons-link" title="View Arkadia Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Arkadia Estates">
                    <span>Visit Arkadia Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/calypso/" class="item-icons-link" title="View Calypso Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Calypso Estates">
                    <span>Visit Calypso Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/monria/" class="item-icons-link" title="View Monria Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Monria Estates">
                    <span>Visit Monria Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/planet-toulan/" class="item-icons-link" title="View Toulan Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Toulan Estates">
                    <span>Visit Toulan Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/crystal-palace/" class="item-icons-link" title="View Crystal Palace Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Crystal Palace Estates">
                    <span>Visit Crystal Palace Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/foma-asteroid/" class="item-icons-link" title="View FOMA Asteroid Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit FOMA Asteroid Estates">
                    <span>Visit FOMA Asteroid Estates</span></nuxt-link>
                </div>
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
  props: ['error'],
  layout: 'error',
  head () {
    return {
      bodyAttrs: {
        class: 'v1',
        id: 'scollbar'
      },
      title: 'Page Not Found',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Market data from auction about Player housing in Entropia Universe. And your first stop for virtual visits of Entropia estates.'
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