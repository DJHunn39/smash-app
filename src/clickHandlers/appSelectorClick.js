export default function appSelectorClick(appName) {
  return this.state.selectedApp === appName ?
  this.setState({selectedApp: ''}):
  this.setState({selectedApp: appName})
}
