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
              pageDesc="This estate is located in Celeste Harbor Area and the nearest teleporter is Celeste Harbor. It has a 115 item points indoors capacity, item display area of 5 and 50 additional area outside. It has an Estate Area of 442.75"
              :pageWaypoint="'Arkadia, 30051, 10263, 149, '+this.estateName"/>
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
import Breadcrumbs_l2 from '@/components/breadcrumbs_l2_ark';
import ModuleTitle from '@/components/module-title';
import ModuleDescWaypoint from '@/components/module-desc-waypoint';
import ModuleDataChart from '@/components/module-datachart';
import ModuleGallery from '@/components/module-gallery';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  data() {
    return {
      estateName: "Celeste North 8 Lvl 6",
      estatePlanet: "Arkadia",
      estateUrl: "celeste-north-8-lvl-6",
      items: [
        '/img/arkadia/celeste-north-8-lvl-6-01.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-02.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-03.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-04.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-05.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-06.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-07.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-08.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-09.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-10.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-11.jpg',
        '/img/arkadia/celeste-north-8-lvl-6-12.jpg',
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
          content: 'https://entropia.estate/arkadia/'+this.estateUrl
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://entropia.estate/arkadia/'+this.estateUrl
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