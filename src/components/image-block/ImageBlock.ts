import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({ name: 'image-block' })
export default class ImageBlock extends Vue {

  @Prop() private imagePath!: string;
  styleObject = {
    width: '100%',
    'background-image': `url(${require('@/'+ this.imagePath)})`,
    height: '100vh',
'background-size': 'cover',
  };

  public mounted() {
    // this.styleObject["background-image"] = this.imagePath;
    console.log(this.imagePath);
  }

}
