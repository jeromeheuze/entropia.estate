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
              pageDesc="This estate is located in Twin Peaks Mall - Floor 3."
              :pageWaypoint="'Calypso, 77922, 76480, 204, '+this.estateName"/>
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
      estateName: "Twin Peaks Mall Shop, Floor 3 #4 L",
      estatePlanet: "Calypso",
      estateUrl: "twin-peaks-mall-shop-floor-3-4-L",
      items: [
        '/img/calypso/twin-peaks-mall-shop-floor-3-4-L-01.jpg',
        '/img/calypso/twin-peaks-mall-shop-floor-3-4-L-02.jpg',
        '/img/calypso/twin-peaks-mall-shop-floor-3-4-L-03.jpg',
        '/img/calypso/twin-peaks-mall-shop-floor-3-4-L-04.jpg',
        '/img/calypso/twin-peaks-mall-shop-floor-3-4-L-05.jpg',
        '/img/calypso/twin-peaks-mall-shop-floor-3-4-L-06.jpg',
        '/img/calypso/twin-peaks-mall-shop-floor-3-4-L-07.jpg',
        '/img/calypso/twin-peaks-mall-shop-floor-3-4-L-08.jpg',
        '/img/calypso/twin-peaks-mall-shop-floor-3-4-L-09.jpg',
        '/img/calypso/twin-peaks-mall-shop-floor-3-4-L-10.jpg',
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