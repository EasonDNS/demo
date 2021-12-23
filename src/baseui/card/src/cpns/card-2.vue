<template>
  <div class="one">
    <div class="two">
      <div class="two1">
        <div class="two11">
          <div class="two111">two111</div>
          **two11** 000000000000000000000000000000000000000000000
        </div>
      </div>
    </div>
    <hr />
    <div class="three"></div>
    <hr />
    <div class="four"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'card-two',
  setup() {
    return {}
  }
})
</script>
//
<style lang="less" scoped>
// .one {
//   position: relative;
//   // background-color: rgba(240, 245, 238, 0.932);
//   width: 100%;
//   // padding: 0 20px 0 20px;
//   box-sizing: border-box;
//   margin: 30px 0;

//   .two {
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column;
//     background-color: rgb(218, 112, 214);
//     height: 100%;
//     width: 100%;

//     .two1 {
//       min-height: 160px;
//       box-sizing: border-box;
//       background-color: red;
//       margin-top: -20px;
//       margin-left: 20px;
//       margin-right: 20px;
//       z-index: 2;

//       .two11 {
//         background-color: rgba(9, 39, 5, 0.411);
//       }
//     }
//     .two2 {
//       height: 20px;
//       background-color: #fff;
//       margin: 10px;
//     }
//     .two3 {
//       height: 20px;
//       background-color: yellowgreen;
//       margin: 5px;
//     }
//   }
// }
//
</style>

<style scoped lang="less">
.one {
  box-sizing: border-box;
  background-color: #fff;
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  .two {
    margin-top: -20px;
    padding: 0 20px;
    .two1 {
      background-color: #bfa;
      box-sizing: border-box;
      overflow: hidden;
      .two11 {
        background-color: orangered;
        .two111 {
          height: 200px;
          background-color: #bfa;
        }
      }
    }
  }
  .three {
    height: 20px;
    background-color: orange;
    width: 100%;
    display: flex;
  }
  .four {
    height: 20px;
    width: 100%;
    background-color: rgb(17, 212, 10);
    padding: 15px 0;
  }
}
</style>
