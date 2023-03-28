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
              pageDesc="This estate is located in Medusa islands and the nearest teleporter is Medusa. This is a land area with a building as a shop."
              :pageWaypoint="'Calypso, 53527, 72473, 116, '+this.estateName"/>
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
import Breadcrumbs_l2 from '@/components/breadcrumbs_l2_caly';
import ModuleTitle from '@/components/module-title';
import ModuleDescWaypoint from '@/components/module-desc-waypoint';
import ModuleDataChart from '@/components/module-datachart';
import ModuleGallery from '@/components/module-gallery';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  data() {
    return {
      estateName: "Ayida Lodge",
      estatePlanet: "Calypso",
      estateUrl: "ayida-lodge",
      items: [
        '/img/calypso/ayida-lodge-01.png',
        '/img/calypso/ayida-lodge-02.png',
        '/img/calypso/ayida-lodge-03.png',
        '/img/calypso/ayida-lodge-04.png',
        '/img/calypso/ayida-lodge-05.png',
        '/img/calypso/ayida-lodge-06.png',
        '/img/calypso/ayida-lodge-07.png',
        '/img/calypso/ayida-lodge-08.png',
        '/img/calypso/ayida-lodge-09.png',
        '/img/calypso/ayida-lodge-10.png',
        '/img/calypso/ayida-lodge-11.png',
        '/img/calypso/ayida-lodge-12.png',
        '/img/calypso/ayida-lodge-13.png',
        '/img/calypso/ayida-lodge-14.png',
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
          content: 'https://entropia.estate/calypso/'+this.estateUrl
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://entropia.estate/calypso/'+this.estateUrl
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