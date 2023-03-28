<template>
  <div class="col-xs-12 col-lg-12 dataChart">
    <div class="sideItemNav">
      <div class="tableContainer">
        <table class="table table-borderless">
          <thead>
          <tr class="table-header">
            <th>Property Name<span v-if="totalSlots"> (Total Item Slots {{totalSlots}})</span></th>
            <th>PED/Slots Price</th>
            <th>Bid Price</th>
            <th>Buyout Price</th>
            <th>Date</th>
          </tr>
          </thead>
          <tbody class="dataListing">
          <tr v-if="dataListing" v-for="(item, index) in dataListing">
            <td>{{ item.property_name }}</td>

            <td v-if="dataListingDetails && (parseInt(item.bid_price) !== parseInt(item.buyout_price))">{{ (parseInt(item.bid_price) / totalSlots) | ped }} PED  to {{ (parseInt(item.buyout_price) / totalSlots) | ped }} PED</td>
            <td v-if="dataListingDetails && (parseInt(item.bid_price) === parseInt(item.buyout_price))">{{ (parseInt(item.buyout_price) / totalSlots) | ped }} PED</td>
            <td v-if="!dataListingDetails">No Data</td>

            <td>{{ item.bid_price | ped }} PED</td>
            <td>{{ item.buyout_price | ped }} PED</td>
            <td>{{ item.date_end }}</td>
          </tr>
          <tr v-if="!dataListing"><td colspan=5 style=text-align:center;>No Data</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataListing: null,
      dataListingDetails: null,
      totalSlots: null
    }
  },
  async fetch() {

    this.dataListing = null;
    this.dataListingDetails = null;
    let init = await this.$supabase.from("all_estates_deed").select('*').eq('property_name',this.estateName).order('date_end', {ascending: false});
    let details = await this.$supabase.from("estates_info").select('*').eq('e_name',this.estateName).limit(1);
    if (details.data.length > 0) {
      //calculate PED / Areas
      this.totalSlots = parseInt(details.data[0].item_points_indoors)+parseInt(details.data[0].item_points_display)+parseInt(details.data[0].item_points_add_area);
    }
    this.dataListingDetails = details.data;
    this.dataListing = init.data;

  },
  fetchOnServer: false,
  props: ['estateName']
}
</script>