<template>

  <div>

    <el-row type="flex">
      <el-col :span="24">
        <el-card shadow="hover">
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="Buscar por:">
              <el-input
                v-model="form.txtBusqueda"
                placeholder="Buscar por:"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Buscar</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <!-- <Card v-loading="Loadinggenderize">
      {{ datagenderize }}
    </Card> -->

    <el-row type="flex" v-loading="Loadinggenderize">
      <el-col :span="24">
        <el-card shadow="hover">
          {{ datagenderize }}
        </el-card>
      </el-col>
    </el-row>

    <el-row type="flex" v-loading="Loadingnationalize">
      <el-col :span="24" >
        <el-card shadow="hover" v-if="!Loadingnationalize && datanationalize.name">

          <h1> {{ datanationalize.name }} </h1>

          <el-table :data="datanationalize.country" style="width: 100%">
              <el-table-column prop="country_id" label="Pais" width="180">
              </el-table-column>
              <el-table-column prop="probability" label="Probabilidad" width="180">
              </el-table-column>
          </el-table>

        </el-card>
      </el-col>
    </el-row>

    <el-row type="flex" v-loading="Loadingagify">
      <el-col :span="24">
        <el-card shadow="hover">
          {{ dataagify }}
        </el-card>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import getApi from '../api'
// import Card from '../components/Card.vue'

export default {
  name: "Busqueda",
  // components: {Card},
  data() {
    return {
      form: { txtBusqueda: "" },

      Loadinggenderize : false,
      Loadingnationalize : false,
      Loadingagify : false,

      datagenderize : {},
      datanationalize : {},
      dataagify : {}
    };
  },
  methods: {
    onSubmit() {

      let urlgenderize = 'https://api.genderize.io/?name=' + this.form.txtBusqueda;
      let urlnationalize = 'https://api.nationalize.io/?name=' + this.form.txtBusqueda;
      let urlagify = 'https://api.agify.io/?name=' + this.form.txtBusqueda;

      let _this = this

      this.Loadinggenderize = true
      getApi(urlgenderize, function(res){
         _this.Loadinggenderize = false
        if( res.result == 'ok') _this.datagenderize = res.data;
      });

      this.Loadingnationalize = true
      getApi(urlnationalize, function(res){

          // simulando algo de tiempo
          // setTimeout(function(){
            _this.Loadingnationalize = false
            if( res.result == 'ok') _this.datanationalize = res.data;
          // }, 3000);


      });

      this.Loadingagify = true
      getApi(urlagify, function(res){
         _this.Loadingagify = false
        if( res.result == 'ok') _this.dataagify = res.data;
      });



    },
  },
};
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }
</style>