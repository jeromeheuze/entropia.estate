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
              pageDesc="This estate is located near Southern Ithaca Teleporter. It has a 30 item points indoors capacity and additional 2 outdoor points. It has an Estate Area of 576."
              :pageWaypoint="'Calypso, 70620, 85774, 171, '+this.estateName"/>
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
      estateName: "Southern Ithaca Heights #12",
      estatePlanet: "Calypso",
      estateUrl: "southern-ithaca-heights-12",
      items: [
        '/img/calypso/southern-ithaca-heights-12-01.jpg',
        '/img/calypso/southern-ithaca-heights-12-02.jpg',
        '/img/calypso/southern-ithaca-heights-12-03.jpg',
        '/img/calypso/southern-ithaca-heights-12-04.jpg',
        '/img/calypso/southern-ithaca-heights-12-05.jpg',
        '/img/calypso/southern-ithaca-heights-12-06.jpg',
        '/img/calypso/southern-ithaca-heights-12-07.jpg',
        '/img/calypso/southern-ithaca-heights-12-08.jpg',
        '/img/calypso/southern-ithaca-heights-12-09.jpg',
        '/img/calypso/southern-ithaca-heights-12-10.jpg',
        '/img/calypso/southern-ithaca-heights-12-11.jpg',
        '/img/calypso/southern-ithaca-heights-12-12.jpg',
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