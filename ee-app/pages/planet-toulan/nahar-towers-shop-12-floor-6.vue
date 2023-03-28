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
              pageDesc="This estate is located in Nahar Towers and the nearest teleporter is Nahar City. It has a 145 item points indoors and 5 item points in display area."
              :pageWaypoint="'Planet Toulan, 134389, 96633, 280, '+this.estateName"/>
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
import Breadcrumbs_l2 from '@/components/breadcrumbs_l2_toulan';
import ModuleTitle from '@/components/module-title';
import ModuleDescWaypoint from '@/components/module-desc-waypoint';
import ModuleDataChart from '@/components/module-datachart';
import ModuleGallery from '@/components/module-gallery';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  data() {
    return {
      estateName: "Nahar Towers, Shop 12 - Floor 6",
      estatePlanet: "Planet Toulan",
      estateUrl: "nahar-towers-shop-12-floor-6",
      items: [
        '/img/planet-toulan/nahar-towers-shop-12-floor-6-01.jpg',
        '/img/planet-toulan/nahar-towers-shop-small-floor-6-02.jpg',
        '/img/planet-toulan/nahar-towers-shop-small-floor-6-03.jpg',
        '/img/planet-toulan/nahar-towers-shop-small-floor-6-04.jpg',
        '/img/planet-toulan/nahar-towers-shop-small-floor-6-05.jpg',
        '/img/planet-toulan/nahar-towers-shop-small-floor-6-06.jpg',
        '/img/planet-toulan/nahar-towers-shop-small-floor-6-07.jpg',
        '/img/planet-toulan/nahar-towers-shop-small-floor-6-08.jpg',
        '/img/planet-toulan/nahar-towers-shop-small-floor-6-09.jpg',
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
          content: 'https://entropia.estate/planet-toulan/'+this.estateUrl
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://entropia.estate/planet-toulan/'+this.estateUrl
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