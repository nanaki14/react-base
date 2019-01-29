import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sample as sampleActions, queries } from '~/store/modules/sample'

import Sample from '~/components/pages/Sample'

const mapStateToProps = (state) => {
  return {
    sample: state.sample,
    getCount: queries.getCount(state.sample)
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      incrment: sampleActions.creators.increment,
      decrement: sampleActions.creators.decrement
    },
    dispatch
  )

const SampeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample)

export default SampeContainer
