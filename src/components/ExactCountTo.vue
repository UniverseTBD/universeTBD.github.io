<script>
import CountTo from "vue-count-to/src";

const baseFormatNumber = CountTo.methods.formatNumber;

export default {
  extends: CountTo,
  methods: {
    formatNumber(num) {
      if (this.decimals === 0) {
        const isNegative = num < 0;
        let x1 = Math.floor(Math.abs(num)).toString();
        const rgx = /(\d+)(\d{3})/;

        if (this.separator && !this.isNumber(this.separator)) {
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, "$1" + this.separator + "$2");
          }
        }

        const sign = isNegative ? "-" : "";
        return sign + this.prefix + x1 + this.suffix;
      }

      return baseFormatNumber.call(this, num);
    },
  },
};
</script>
