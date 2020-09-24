import Chart from 'chart.js';
import { initGlobalOptions } from "@/components/argon/Charts/config";
export default {
  mounted() {
    initGlobalOptions(Chart);
  }
}
