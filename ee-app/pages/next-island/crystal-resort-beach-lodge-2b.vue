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
              pageDesc="This estate is located in Crystal Resort Beach Area. This shop has 150 items count and 16 additional items outside. It has an Estate Area of 550."
              :pageWaypoint="'Next Island, 137105, 83222, 101, '+this.estateName"/>
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
import Breadcrumbs_l2 from '@/components/breadcrumbs_l2_ni';
import ModuleTitle from '@/components/module-title';
import ModuleDescWaypoint from '@/components/module-desc-waypoint';
import ModuleDataChart from '@/components/module-datachart';
import ModuleGallery from '@/components/module-gallery';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  data() {
    return {
      estateName: "Crystal Resort Beach Lodge 2B",
      estatePlanet: "Next Island",
      estateUrl: "crystal-resort-beach-lodge-2b",
      items: [
        '/img/next-island/crystal-resort-beach-lodge-2b-01.png',
        '/img/next-island/crystal-resort-beach-lodge-2b-02.png',
        '/img/next-island/crystal-resort-beach-lodge-2b-03.png',
        '/img/next-island/crystal-resort-beach-lodge-2b-04.png',
        '/img/next-island/crystal-resort-beach-lodge-2b-05.png',
        '/img/next-island/crystal-resort-beach-lodge-2b-06.png',
        '/img/next-island/crystal-resort-beach-lodge-2b-07.png',
        '/img/next-island/crystal-resort-beach-lodge-2b-08.png',
        '/img/next-island/crystal-resort-beach-lodge-2b-09.png',
        '/img/next-island/crystal-resort-beach-lodge-2b-10.png',
        '/img/next-island/crystal-resort-beach-lodge-2b-11.png',
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
          content: 'https://entropia.estate' + this.$route.fullPath
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.items[0]
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.items[0]
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.items[0]
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://entropia.estate' + this.$route.fullPath
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