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
              pageDesc="This estate is located by the Treasure Island Northern Shores Teleporter. It has a 350 item points indoors capacity and 30 additional points outside. It has an Estate Area of 4200."
              :pageWaypoint="'Calypso, 40298, 55400, 101, '+this.estateName"/>
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
      estateName: "Treasure Island North Skipper #1",
      estatePlanet: "Calypso",
      estateUrl: "treasure-island-north-skipper-1",
      items: [
        '/img/calypso/treasure-island-north-skipper-1-01.png',
        '/img/calypso/treasure-island-north-skipper-1-02.png',
        '/img/calypso/treasure-island-north-skipper-1-03.png',
        '/img/calypso/treasure-island-north-skipper-1-04.png',
        '/img/calypso/treasure-island-north-skipper-1-05.png',
        '/img/calypso/treasure-island-north-skipper-1-06.png',
        '/img/calypso/treasure-island-north-skipper-1-07.png',
        '/img/calypso/treasure-island-north-skipper-1-08.png',
        '/img/calypso/treasure-island-north-skipper-1-09.png',
        '/img/calypso/treasure-island-north-skipper-1-10.png',
        '/img/calypso/treasure-island-north-skipper-1-11.png',
        '/img/calypso/treasure-island-north-skipper-1-12.png',
        '/img/calypso/treasure-island-north-skipper-1-13.png',
        '/img/calypso/treasure-island-north-skipper-1-14.png',
        '/img/calypso/treasure-island-north-skipper-1-15.png',
        '/img/calypso/treasure-island-north-skipper-1-16.png',
        '/img/calypso/treasure-island-north-skipper-1-17.png',
        '/img/calypso/treasure-island-north-skipper-1-18.png',
        '/img/calypso/treasure-island-north-skipper-1-19.png',
        '/img/calypso/treasure-island-north-skipper-1-20.png',
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