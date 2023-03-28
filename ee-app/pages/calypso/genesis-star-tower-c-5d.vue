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
              pageDesc="This estate is located in Genesis Star Tower C in the Genesis Amethera HQ Teleporter."
              :pageWaypoint="'Calypso, 34382, 48215, 149, '+this.estateName"/>
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
      estateName: "Genesis Star Tower C, 5D",
      estatePlanet: "Calypso",
      estateUrl: "genesis-star-tower-c-5d",
      items: [
        '/img/calypso/genesis-star-tower-c-5d-01.png',
        '/img/calypso/genesis-star-tower-c-5d-02.png',
        '/img/calypso/genesis-star-tower-c-5d-03.png',
        '/img/calypso/genesis-star-tower-c-5d-04.png',
        '/img/calypso/genesis-star-tower-c-5d-05.png',
        '/img/calypso/genesis-star-tower-c-5d-06.png',
        '/img/calypso/genesis-star-tower-c-5d-07.png',
        '/img/calypso/genesis-star-tower-c-5d-08.png',
        '/img/calypso/genesis-star-tower-c-5d-09.png',
        '/img/calypso/genesis-star-tower-c-5d-10.png',
        '/img/calypso/genesis-star-tower-c-5d-11.png',
        '/img/calypso/genesis-star-tower-c-5d-12.png',
        '/img/calypso/genesis-star-tower-c-5d-13.png',
        '/img/calypso/genesis-star-tower-c-5d-14.png',
        '/img/calypso/genesis-star-tower-c-5d-15.png',
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