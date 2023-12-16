<template>
  <LazyHydrate when-visible>


    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent subPages">
        <div class="breadcrumbs">
          <a href="/">Home</a> <em class="bc-next"></em>
          <nuxt-link to="/deeds-condos-shops-estates/">Estate Deeds 2020</nuxt-link> <em class="bc-next"></em>
          <nuxt-link to="/deeds-condos-shops-estates-2021/">Estate Deeds 2021</nuxt-link>  <em class="bc-next"></em>
          <nuxt-link to="/deeds-condos-shops-estates-2022/">Estate Deeds 2022</nuxt-link>  <em class="bc-next"></em>
          <nuxt-link to="/deeds-condos-shops-estates-2023/">Estate Deeds 2023</nuxt-link>
        </div>
        <h1>Estate Deeds 2020</h1>
        <section class="dataContent">
          <div class="row">
            <div class="col-lg-12 order-lg-1 dataHeader">
              <p>Estate Deed <small>Planets estates housing pricing.</small></p>
            </div>
            <div class="col-12 order-3 col-xs-12 order-xs-3 col-sm-12 order-sm-3 col-md-12 order-md-3 col-lg-3 order-lg-2 sideItemNav">
              <h2>Estate Deed</h2>
              <ul>
                <li><button type="button" v-bind:class="buttonActiveAll" @click="fetchPlanet('All')">All Estates</button></li>
                <li><button type="button" v-bind:class="buttonActiveCaly" @click="fetchPlanet('Calypso')">Calypso Estates</button></li>
                <li><button type="button" v-bind:class="buttonActiveArkadia" @click="fetchPlanet('Arkadia')">Arkadia Estates</button></li>
                <li><button type="button" v-bind:class="buttonActiveFOMA" @click="fetchPlanet('FOMA Asteroid')">FOMA Asteroid Estates</button></li>
                <li><button type="button" v-bind:class="buttonActiveCP" @click="fetchPlanet('Crystal Palace')">Crystal Palace</button></li>
                <li><button type="button" v-bind:class="buttonActiveAG" @click="fetchPlanet('Ancient Greece')">Ancient Greece</button></li>
                <li><button type="button" v-bind:class="buttonActiveMonria" @click="fetchPlanet('Monria')">Monria Estates</button></li>
                <li><button type="button" v-bind:class="buttonActiveRocktopia" @click="fetchPlanet('Rocktopia')">Rocktopia Estates</button></li>
                <li><button type="button" v-bind:class="buttonActiveNI" @click="fetchPlanet('Next Island')">Next Island Estates</button></li>
                <li><button type="button" v-bind:class="buttonActiveToulan" @click="fetchPlanet('Planet Toulan')">Planet Toulan Estates</button></li>
              </ul>
            </div>
            <div class="col-12 order-2 col-xs-12 order-xs-2 col-sm-12 order-sm-2 col-md-12 order-md-2 col-lg-9 order-lg-3 chartData">
              <h2>Data for <span id="data-name">{{ planetClicked }} Estates</span></h2>
              <div class="hs_chart">
                <highchart :options="chartOptions" />
              </div>
              <div class="tableContainer">
                <table class="table table-borderless">
                  <thead>
                  <tr class="table-header">
                    <th>Property Name (Item Slots)</th>
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
                    <td v-if="(estate.planet !== 'Next Island' && estate.planet !== 'Toulan' && estate.planet !== 'DSEC9')">
                      <nuxt-link :to="estate.planet | planet">{{ estate.planet }}</nuxt-link>
                    </td>
                    <td v-if="estate.planet === 'Next Island'">{{ estate.planet }}</td>
                    <td v-if="estate.planet === 'Toulan'"><nuxt-link to="/planet-toulan/">Planet Toulan</nuxt-link></td>
                    <td v-if="estate.planet === 'DSEC9'">DSEC9</td>
                    <td>{{ estate.bid_price | ped }} PED</td>
                    <td>{{ estate.buyout_price | ped }} PED</td>
                    <td>{{ estate.date_end }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
      caption: 'Planet Calypso',
      title: 'Calypso 0 Estates',
      subtitle: 'Listing per months',
      points: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      seriesColor: '',
      animationDuration: 1000,
      chartType: '',
      colorInputIsSupported: null,
      chartTypes: [],
      durations: [0, 500, 1000, 2000],
      seriesName: 'No. Of Estates',
      yAxis: 'Estates',
      watchers: [
        'options.title',
        'options.series'
      ],
      colors: [
        'Red',
        'Green',
        'Blue',
        'Pink',
        'Orange',
        'Brown',
        'Black',
        'Purple'
      ],
      lastPointClicked: {
        timestamp: '',
        x: '',
        y: ''
      },
      sexy: false,
      estates: null,
      estateHaveUrl: null,
      estatesArr: [],
      estatesMonths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      planetClicked: "Calypso"
    }
  },
  computed: {
    chartOptions () {
      const ctx = this
      return {
        caption: {
          text: this.caption,
          style: {
            color: '#fff'
          }
        },
        chart: {
          backgroundColor: '#131f24',
          borderStyle: 'solid',
          borderWidth: '1',
          borderColor: '#182c36',
          padding: '10',
          className: 'em-chart',
          type: this.chartType.toLowerCase()
        },
        plotOptions: {
          series: {
            cursor: 'pointer',
            point: {
              events: {
                click() {
                  ctx.$emit('pointClicked', this)
                }
              }
            }
          }
        },
        xAxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          crosshair: true
        },
        yAxis: [{
          title: {
            text: this.yAxis,
            style: {
              color: '#ccc'
            }
          }
        }],
        title: {
          style: {
            color: '#fff',
            paddingTop: '20'
          },
          text: `${this.title} ` +
              (this.lastPointClicked.timestamp !== ''
                  ? `(Point clicked: ${this.lastPointClicked.timestamp})`
                  : '')
        },
        subtitle: {
          style: {
            color: '#fff'
          },
          text: `${this.subtitle}`
        },
        legend: {
          itemStyle: {
            color: '#fff'
          }
        },
        series: [{
          name: this.seriesName,
          data: this.points,
          color: this.seriesColor
        }]
      }
    },
    buttonActiveAll: function () {
      return 'All' === this.planetClicked ? "btn-em primary active" : "btn-em primary"
    },
    buttonActiveCaly: function () {
      return 'Calypso' === this.planetClicked ? "btn-em primary active" : "btn-em primary"
    },
    buttonActiveArkadia: function () {
      return 'Arkadia' === this.planetClicked ? "btn-em primary active" : "btn-em primary"
    },
    buttonActiveFOMA: function () {
      return 'FOMA Asteroid' === this.planetClicked ? "btn-em primary active" : "btn-em primary"
    },
    buttonActiveCP: function () {
      return 'Crystal Palace' === this.planetClicked ? "btn-em primary active" : "btn-em primary"
    },
    buttonActiveAG: function () {
      return 'Ancient Greece' === this.planetClicked ? "btn-em primary active" : "btn-em primary"
    },
    buttonActiveMonria: function () {
      return 'Monria' === this.planetClicked ? "btn-em primary active" : "btn-em primary"
    },
    buttonActiveRocktopia: function () {
      return 'Rocktopia' === this.planetClicked ? "btn-em primary active" : "btn-em primary"
    },
    buttonActiveNI: function () {
      return 'Next Island' === this.planetClicked ? "btn-em primary active" : "btn-em primary"
    },
    buttonActiveToulan: function () {
      return 'Planet Toulan' === this.planetClicked ? "btn-em primary active" : "btn-em primary"
    }
  },
  methods: {
    async fetchPlanet(planet) {
      this.estates = null;
      this.planetClicked = planet;
      let init = null;
      if (planet === 'All') {
        init = await this.$supabase.from("all_estates_deed")
            .select('*')
            //.eq('planet', planet)
            .lt('date_end', '2020-12-31')
            .gt('date_end', '2020-01-01')
            .order('date_end', {ascending: false});
      } else {
        init = await this.$supabase.from("all_estates_deed")
            .select('*')
            .eq('planet', planet)
            .lt('date_end', '2020-12-31')
            .gt('date_end', '2020-01-01')
            .order('date_end', {ascending: false});
      }

      let urls = await this.$supabase.from("estates_info").select('e_name, e_url');
      this.estates = init.data;
      this.estateHaveUrl = urls.data;
      //post
      //console.log(this.estates);
      this.estatesArr = this.estates;
      this.getTotalPlanetEstates(planet);
      this.estatesMonths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.scanEstates();
    },
    getTotalPlanetEstates(planet) {
      this.title = planet+' '+this.estatesArr.length+' Estates';
      this.caption = planet;
    },
    scanEstates() {
      let matches = 0;
      for (let x=0; x < this.estatesArr.length; x++) {
        let dateEnd = this.estatesArr[x].date_end.slice(0, -3);
        if (dateEnd === '2020-01') {
          this.estatesMonths[0] = this.estatesMonths[0] + 1;
        }
        if (dateEnd === '2020-02') {
          this.estatesMonths[1] = this.estatesMonths[1] + 1;
        }
        if (dateEnd === '2020-03') {
          this.estatesMonths[2] = this.estatesMonths[2] + 1;
        }
        if (dateEnd === '2020-04') {
          this.estatesMonths[3] = this.estatesMonths[3] + 1;
        }
        if (dateEnd === '2020-05') {
          this.estatesMonths[4] = this.estatesMonths[4] + 1;
        }
        if (dateEnd === '2020-06') {
          this.estatesMonths[5] = this.estatesMonths[5] + 1;
        }
        if (dateEnd === '2020-07') {
          this.estatesMonths[6] = this.estatesMonths[6] + 1;
        }
        if (dateEnd === '2020-08') {
          this.estatesMonths[7] = this.estatesMonths[7] + 1;
        }
        if (dateEnd === '2020-09') {
          this.estatesMonths[8] = this.estatesMonths[8] + 1;
        }
        if (dateEnd === '2020-10') {
          this.estatesMonths[9] = this.estatesMonths[9] + 1;
        }
        if (dateEnd === '2020-11') {
          this.estatesMonths[10] = this.estatesMonths[10] + 1;
        }
        if (dateEnd === '2020-12') {
          this.estatesMonths[11] = this.estatesMonths[11] + 1;
        }
      }
      this.points = this.estatesMonths;
    },
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
  async fetch() {

    await this.fetchPlanet('Calypso');

  },
  fetchOnServer: false,
  head () {
    return {
      bodyAttrs: {
        class: 'v1',
        id: 'scollbar'
      },
      title: 'Estate Deed 2020',
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
          content: 'Market data from 2020 of auction about Player housing in Entropia Universe. And your first stop for virtual visits of Entropia estates.'
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