<template>
  <LazyHydrate when-visible>


      <main>
        <BackgroundEffect/>
        <Header/>
        <div class="container siteContent">
          <h1>Entropia Estate</h1>
          <p style="text-align: center;">Market data from auction about deeds in Entropia Universe. And your first stop for virtual visits of Entropia estates.</p>
          <div class="textContent">
            <div class="row">

              <div class="col-xs-12 col-sm-6 col-lg-3">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/deeds-condos-shops-estates-2023/" class="item-icons-link" title="View all Estate Deeds auctions">
                    <img src="/img/icons/deeds_icon.png" class="item-icons" alt="View all Estate Deeds auctions">
                    <span>Estate Deeds 2023</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-3">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/deeds-condos-shops-estates-2022/" class="item-icons-link" title="View all Estate Deeds auctions">
                    <img src="/img/icons/deeds_icon.png" class="item-icons" alt="View all Estate Deeds auctions">
                    <span>Estate Deeds 2022</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-3">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/deeds-condos-shops-estates-2021/" class="item-icons-link" title="View all Estate Deeds auctions">
                    <img src="/img/icons/deeds_icon.png" class="item-icons" alt="View all Estate Deeds auctions">
                    <span>Estate Deeds 2021</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-lg-3">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/deeds-condos-shops-estates/" class="item-icons-link" title="View all Estate Deeds auctions">
                    <img src="/img/icons/deeds_icon.png" class="item-icons" alt="View all Estate Deeds auctions">
                    <span>Estate Deeds 2020</span></nuxt-link>
                </div>
              </div>



              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/arkadia/" class="item-icons-link" title="View Arkadia Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Arkadia Estates">
                    <span>Visit Arkadia Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/calypso/" class="item-icons-link" title="View Calypso Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Calypso Estates">
                    <span>Visit Calypso Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/monria/" class="item-icons-link" title="View Monria Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Monria Estates">
                    <span>Visit Monria Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/planet-toulan/" class="item-icons-link" title="View Toulan Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Toulan Estates">
                    <span>Visit Toulan Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/crystal-palace/" class="item-icons-link" title="View Crystal Palace Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Crystal Palace Estates">
                    <span>Visit Crystal Palace Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/foma-asteroid/" class="item-icons-link" title="View FOMA Asteroid Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit FOMA Asteroid Estates">
                    <span>Visit FOMA Asteroid Estates</span></nuxt-link>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-lg-4">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link to="/next-island/" class="item-icons-link" title="View Next Island Estates">
                    <img src="/img/icons/deeds_icon_visit.jpg" class="item-icons" alt="Visit Next Island Estates">
                    <span>Visit Next Island Estates</span></nuxt-link>
                </div>
              </div>

            </div>
          </div>
          <section class="textContent" style="padding-bottom: 2rem;">
            <h2 style="font-size: 2rem;padding-bottom: .5rem;">Guides</h2>
            <div class="row" v-if="guides.length">

              <div class="col-xs-12 col-sm-6 col-lg-4" v-for="guide of guides" :key="guide.slug">
                <div class="item-shortcut-cont" style="padding:3rem;">
                  <nuxt-link :to="'/guides/'+guide.slug+'/'" class="item-icons-link" :title="guide.title">
                    <img :src="guide.img_thumb" class="item-icons" :alt="guide.title" style="max-width: 100%;border: 1px solid #8bdbff;">
                    <span>{{ guide.title }}</span></nuxt-link>
                </div>
              </div>

            </div>
            <div class="cta" style="text-align: center;">
              <nuxt-link to="/guides/" class="btn-em primary">View All Guides</nuxt-link>
            </div>
          </section>
          <section class="textContent" style="padding-bottom: 3rem;">
            <h2 style="font-size: 2.5rem;padding-bottom: .5rem;">Current deeds in Entropia in-game auction</h2>
            <div style="margin: 3rem 0;">
              <div class="tableContainer">

                <table class="table table-borderless" style="font-size:0.9em;">
                  <thead>
                  <tr class="table-header">
                    <th>Property Name</th>
                    <th>Planet</th>
                    <th>Bid Price</th>
                    <th>Buyout Price</th>
                    <th>Date</th>
                  </tr>
                  </thead>
                  <tbody class="dataListing">
                  <tr style="color: aliceblue;" v-for='estate in estates' :key="estate.id">
                    <td v-if="searchEstates(estate.property_name)"><a :href="getEstateUrl(estate.property_name)">{{ estate.property_name }}</a></td>
                    <td v-if="!searchEstates(estate.property_name)">{{ estate.property_name }}</td>
                    <td v-if="estate.planet !== 'Next Island' && estate.planet !== 'Toulan' && estate.planet !== 'DSEC9'"><nuxt-link :to="estate.planet | planet">{{ estate.planet }}</nuxt-link></td>
                    <td v-if="estate.planet === 'Next Island'">{{ estate.planet }}</td>
                    <td v-if="estate.planet === 'Toulan'"><nuxt-link to="/planet-toulan/">Planet Toulan</nuxt-link></td>
                    <td v-if="estate.planet === 'DSEC9'">DSEC9</td>
                    <td>{{ estate.bid_price | ped }} PED</td>
                    <td>{{ estate.buyout_price | ped }} PED</td>
                    <td>{{ estate.date_end }}</td>
                  </tr>
                  </tbody>
                </table>
                <div class="cta" style="text-align: center;">
                  <nuxt-link to="/deeds-condos-shops-estates-2023/" class="btn-em primary" data-name="Shops">View All 2023 Listings</nuxt-link>
                </div>
                <div class="disclaimer"><small>All recorded data is manual and we cannot verified if each estates sold for that price. Use this information at your own risk when dealing with trades outside of Auction House.</small></div>
              </div>

            </div>
          </section>
          <section class="textContent" style="padding-bottom: 3rem;">
            <h2 style="font-size: 2rem;padding-bottom: .5rem;">What is Entropia Universe MMORPG?</h2>
            <p>Entropia Universe is a Massive Multiplayer Online video game designed and maintained by Swedish software company MindArk. It was first released in 2003. Entropia uses micropayments business model where players can exchange currency into in-game currency called PED. The exchange rate has been fixed since the beginning at the rate of 10 PED:$1 USD</p>
          </section>
          <section class="textContent" style="padding-bottom: 3rem;">
            <h2 style="font-size: 2rem;padding-bottom: .5rem;">What do we provide at EntropiaEstate?</h2>
            <p>At EntropiaEstate we provide a reference for understanding the historical worth of Estates deeds that are available in-game. We capture the prices in PED that auction issuers are willing to sell their digital properties. We also provide virtual visits of Properties for your viewing before buying or bidding. Know before buying the actual value of an estate.</p>
          </section>
          <section class="textContent" style="padding-bottom: 3rem;">
            <h2 style="font-size: 2rem;padding-bottom: .5rem;">What is an Estate deed in Entropia Universe?</h2>
            <p>In Entropia Universe we have different type of deeds. Estate deed are player housing provided by MindArk and Planet partners. Estate Plot deeds are areas the player can add structures. Estate Land Area deeds are bigger areas where mobs can be added for hunters. And Estates Shop deeds is a special type of building where the player can sell items from the game at their own prices.</p>
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
import LazyHydrate from 'vue-lazy-hydration';
export default {
  data() {
    return {
      estates: null,
      estateHaveUrl: null,
      guides: []
    }
  },
  async asyncData({ $content }) {
    const guides = await $content('guides').only(['title', 'slug', 'img_thumb']).sortBy('createdAt', 'asc').limit(6).fetch()

    return {
      guides
    }
  },
  async fetch() {

    this.estates = null;
    let init = await this.$supabase.from("all_estates_deed").select('property_name, planet, bid_price, buyout_price, date_end').order('date_end', {ascending: false}).limit(10);
    let urls = await this.$supabase.from("estates_info").select('e_name, e_url');
    this.estates = init.data;
    this.estateHaveUrl = urls.data;
  },
  fetchOnServer: false,
  methods: {
    searchEstates(estateName) {
      const result = this.estateHaveUrl.find( ({ e_name, e_url }) => e_name === estateName );
      return !!result;
    },
    getEstateUrl(estateName) {
      const result = this.estateHaveUrl.find( ({ e_name, e_url }) => e_name === estateName );
      if (result) {
        return result.e_url;
      } else {
        return false;
      }
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'v1',
        id: 'scollbar'
      },
      title: 'Home',
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
          content: 'Market data from auction about Player housing in Entropia Universe. And your first stop for virtual visits of Entropia estates.'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://entropia.estate' + this.$route.fullPath
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
  components: {LazyHydrate, Footer, Header, BackgroundEffect}
}
</script>