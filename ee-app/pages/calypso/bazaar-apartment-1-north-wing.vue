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
              pageDesc="This estate is located in Medusa Estates and the nearest teleporter is Medusa. It has a 120 item points indoors capacity."
              :pageWaypoint="'Calypso, 53431, 69399, 106, '+this.estateName"/>
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
      estateName: "Bazaar Apartment 1, North Wing",
      estatePlanet: "Calypso",
      estateUrl: "bazaar-apartment-1-north-wing",
      items: [
        '/img/calypso/bazaar-apartment-1-north-wing-01.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-02.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-03.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-04.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-05.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-06.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-07.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-08.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-09.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-10.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-11.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-12.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-13.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-14.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-15.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-16.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-17.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-18.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-19.jpg',
        '/img/calypso/bazaar-apartment-1-north-wing-20.jpg',
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