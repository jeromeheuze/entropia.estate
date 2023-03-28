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
              pageDesc="This estate is located in Nahar Towers on first floor and the nearest teleporter is Nahar City. It has a 175 item points inside."
              :pageWaypoint="'Planet Toulan, 134389, 96644, 264, '+this.estateName"/>
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
      estateName: "Nahar Towers, Apartment D (M) - Floor 5",
      estatePlanet: "Planet Toulan",
      estateUrl: "nahar-towers-apartments-d-m-floor-5",
      items: [
        '/img/planet-toulan/nahar-towers-apartments-d-m-floor-5-01.jpg',
        '/img/planet-toulan/nahar-towers-apartments-medium-layout-02.jpg',
        '/img/planet-toulan/nahar-towers-apartments-medium-layout-03.jpg',
        '/img/planet-toulan/nahar-towers-apartments-medium-layout-04.jpg',
        '/img/planet-toulan/nahar-towers-apartments-medium-layout-05.jpg',
        '/img/planet-toulan/nahar-towers-apartments-medium-layout-06.jpg',
        '/img/planet-toulan/nahar-towers-apartments-medium-layout-07.jpg',
        '/img/planet-toulan/nahar-towers-apartments-medium-layout-08.jpg',
        '/img/planet-toulan/nahar-towers-apartments-medium-layout-09.jpg',
        '/img/planet-toulan/nahar-towers-apartments-medium-layout-10.jpg',
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