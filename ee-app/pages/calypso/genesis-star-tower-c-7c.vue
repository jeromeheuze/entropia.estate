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
              :pageWaypoint="'Calypso, 34391, 48209, 160, '+this.estateName"/>
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
      estateName: "Genesis Star Tower C, 7C",
      estatePlanet: "Calypso",
      estateUrl: "genesis-star-tower-c-7c",
      items: [
        '/img/calypso/genesis-star-tower-c-7c-01.jpg',
        '/img/calypso/genesis-star-tower-c-7c-02.jpg',
        '/img/calypso/genesis-star-tower-c-7c-03.jpg',
        '/img/calypso/genesis-star-tower-c-7c-04.jpg',
        '/img/calypso/genesis-star-tower-c-7c-05.jpg',
        '/img/calypso/genesis-star-tower-c-7c-06.jpg',
        '/img/calypso/genesis-star-tower-c-7c-07.jpg',
        '/img/calypso/genesis-star-tower-c-7c-08.jpg',
        '/img/calypso/genesis-star-tower-c-7c-09.jpg',
        '/img/calypso/genesis-star-tower-c-7c-10.jpg',
        '/img/calypso/genesis-star-tower-c-7c-11.jpg',
        '/img/calypso/genesis-star-tower-c-7c-12.jpg',
        '/img/calypso/genesis-star-tower-c-7c-13.jpg',
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