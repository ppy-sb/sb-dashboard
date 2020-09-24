import Badge from '~/components/argon/Badge'
import BaseAlert from '~/components/argon/BaseAlert'
import BaseButton from '~/components/argon/BaseButton'
import BaseCheckbox from '~/components/argon/BaseCheckbox'
import BaseInput from '~/components/argon/BaseInput'
import BaseDropdown from '~/components/argon/BaseDropdown'
import BaseNav from '~/components/argon/BaseNav'
import BasePagination from '~/components/argon/BasePagination'
import BaseProgress from '~/components/argon/BaseProgress'
import BaseRadio from '~/components/argon/BaseRadio'
import BaseSlider from '~/components/argon/BaseSlider'
import BaseSwitch from '~/components/argon/BaseSwitch'
import BaseTable from '~/components/argon/BaseTable'
import BaseHeader from '~/components/argon/BaseHeader'
import Card from '~/components/argon/Card'
import StatsCard from '~/components/argon/StatsCard'
import Modal from '~/components/argon/Modal'
import TabPane from '~/components/argon/Tabs/TabPane'
import Tabs from '~/components/argon/Tabs/Tabs'

export default {
  install (Vue) {
    Vue.component(Badge.name, Badge)
    Vue.component(BaseAlert.name, BaseAlert)
    Vue.component(BaseButton.name, BaseButton)
    Vue.component(BaseInput.name, BaseInput)
    Vue.component(BaseNav.name, BaseNav)
    Vue.component(BaseDropdown.name, BaseDropdown)
    Vue.component(BaseCheckbox.name, BaseCheckbox)
    Vue.component(BasePagination.name, BasePagination)
    Vue.component(BaseProgress.name, BaseProgress)
    Vue.component(BaseRadio.name, BaseRadio)
    Vue.component(BaseSlider.name, BaseSlider)
    Vue.component(BaseSwitch.name, BaseSwitch)
    Vue.component(BaseTable.name, BaseTable)
    Vue.component(BaseHeader.name, BaseHeader)
    Vue.component(Card.name, Card)
    Vue.component(StatsCard.name, StatsCard)
    Vue.component(Modal.name, Modal)
    Vue.component(TabPane.name, TabPane)
    Vue.component(Tabs.name, Tabs)
  }
}
