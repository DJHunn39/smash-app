export default function fighterClick(fighter) {
  return this.state.selectedPlayer === 'A' ?
  this.state.selectedFighterA === fighter ? this.setState({selectedFighterA: {}}): this.setState({selectedFighterA: fighter}):
  this.state.selectedFighterB === fighter ? this.setState({selectedFighterB: {}}): this.setState({selectedFighterB: fighter});
}
