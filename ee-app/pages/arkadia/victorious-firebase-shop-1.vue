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
              pageDesc="This estate is located in Valiant Firebase Area and the nearest teleporter is Valiant Firebase. This is a shop surrounding the TP. It has a 120 item points indoors capacity, item display area of 12 and 12 additional area outside. It has an Estate Area of 840"
              :pageWaypoint="'Arkadia, 17203, 23045, 541, '+this.estateName"/>
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
      estateName: "Victorious Firebase Shop #1",
      estatePlanet: "Arkadia",
      estateUrl: "victorious-firebase-shop-1",
      items: [
        '/img/arkadia/victorious-firebase-shop-1-01.jpg',
        '/img/arkadia/victorious-firebase-shop-1-02.jpg',
        '/img/arkadia/victorious-firebase-shop-1-03.jpg',
        '/img/arkadia/victorious-firebase-shop-1-04.jpg',
        '/img/arkadia/victorious-firebase-shop-1-05.jpg',
        '/img/arkadia/victorious-firebase-shop-1-06.jpg',
        '/img/arkadia/victorious-firebase-shop-1-07.jpg',
        '/img/arkadia/victorious-firebase-shop-1-08.jpg',
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