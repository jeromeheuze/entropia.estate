<template>
  <LazyHydrate when-visible>

    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent subPages">
        <Breadcrumbs_l2 :estateName="this.estateName"/>
        <section class="dataContent">

          <ModuleGallery :items="this.items" :index="this.index"/>
          <ModuleTitle :estateName="this.estateName"/>
          <ModuleDescWaypoint
              pageDesc="This estate is located on FOMA Asteroid. It has a 200 item points indoors capacity and 25 item points for display area."
              :pageWaypoint="'Asteroid, 70467, 70130, 359, '+this.estateName"/>
          <ModuleDataChart :estateName="this.estateName"/>

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
import Breadcrumbs_l2 from '@/components/breadcrumbs_l2_foma';
import ModuleTitle from '@/components/module-title';
import ModuleDescWaypoint from '@/components/module-desc-waypoint';
import ModuleDataChart from '@/components/module-datachart';
import ModuleGallery from '@/components/module-gallery';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  data() {
    return {
      estateName: "F.O.M.A Shop #26",
      estatePlanet: "FOMA Asteroid",
      estateUrl: "foma-shop-26",
      items: [
        '/img/foma-asteroid/foma-shop-26-01.jpg',
        '/img/foma-asteroid/foma-shop-26-02.jpg',
        '/img/foma-asteroid/foma-shop-26-03.jpg',
        '/img/foma-asteroid/foma-shop-26-04.jpg',
        '/img/foma-asteroid/foma-shop-26-05.jpg',
        '/img/foma-asteroid/foma-shop-26-06.jpg',
        '/img/foma-asteroid/foma-shop-26-07.jpg',
        '/img/foma-asteroid/foma-shop-26-08.jpg',
        '/img/foma-asteroid/foma-shop-26-09.jpg',
        '/img/foma-asteroid/foma-shop-26-10.jpg',
        '/img/foma-asteroid/foma-shop-26-11.jpg',
      ],
      index: null
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'v1',
        id: 'scollbar'
      },
      title: this.estateName+' | '+this.estatePlanet+' Estates',
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
          content: 'Checkout '+this.estateName+' located in '+this.estatePlanet+'. Ever wanted to visit '+this.estatePlanet+'\'s virtual estates before buying? Take a tour of the most beautiful housing in Entropia Universe.'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://entropia.estate/foma-asteroid/'+this.estateUrl
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://entropia.estate/foma-asteroid/'+this.estateUrl
        }
      ],
      style: [
      ],
      script: [
      ]
    }
  },
  modules: [],
  components: {LazyHydrate, Footer, Header, BackgroundEffect, Breadcrumbs_l2, ModuleTitle, ModuleDescWaypoint, ModuleDataChart, ModuleGallery}
}
</script>