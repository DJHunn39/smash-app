export default function attributtonClick(attribute) {
  return this.state.selectedAttribute === attribute ?
  this.setState({selectedAttribute: ''}):
  this.setState({selectedAttribute: attribute})
}
