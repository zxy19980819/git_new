<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
{{newmsg}}
<Button type="warning">aaa</Button>
    <br>
    <Row :gutter="32">
      <Col span="12">
      <div class="col">col-6</div>
      </Col>
      <Col span="12">
      <div class="col">col-6</div>
      </Col>

    </Row>
    <Menu></Menu>
  </div>
</template>

<script>
    import { Button,Col,Row,Menu} from 'view-design';
export default {
  name: 'HelloWorld',
  data(){
    return{
        newmsg:this.msg
    }
  },
  components:{
      Button,
      Col,
      Row,
      Menu
  },
  props: {
    msg: {
        type:String,
        default(){
            return ""
        }
    }
  },
    mounted(){


    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.col{
  background-color: grey;
}
</style>
