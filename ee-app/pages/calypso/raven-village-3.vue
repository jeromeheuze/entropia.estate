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
              pageDesc="This estate is located near Rogue Plain West Teleporter. It has a 318 item points indoors capacity and 21 additional area outside. It has an Estate Area of 5449.75"
              :pageWaypoint="'Calypso, 78589, 95881, 123, '+this.estateName"/>
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
      estateName: "Raven Village #3",
      estatePlanet: "Calypso",
      estateUrl: "raven-village-3",
      items: [
        '/img/calypso/raven-village-3-01.jpg',
        '/img/calypso/raven-village-3-02.jpg',
        '/img/calypso/raven-village-3-03.jpg',
        '/img/calypso/raven-village-3-04.jpg',
        '/img/calypso/raven-village-3-05.jpg',
        '/img/calypso/raven-village-3-06.jpg',
        '/img/calypso/raven-village-3-07.jpg',
        '/img/calypso/raven-village-3-08.jpg',
        '/img/calypso/raven-village-3-09.jpg',
        '/img/calypso/raven-village-3-10.jpg',
        '/img/calypso/raven-village-3-11.jpg',
        '/img/calypso/raven-village-3-12.jpg',
        '/img/calypso/raven-village-3-13.jpg',
        '/img/calypso/raven-village-3-14.jpg',
        '/img/calypso/raven-village-3-15.jpg',
        '/img/calypso/raven-village-3-16.jpg',
        '/img/calypso/raven-village-3-17.jpg',
        '/img/calypso/raven-village-3-18.jpg',
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