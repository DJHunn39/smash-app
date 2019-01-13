export default function fighterClick(fighter) {

  const {
    selectedPlayer,
    selectedFighterA,
    selectedFighterB,
    selectedFighterC,
    selectedFighterD,
  } = this.state;

  switch (selectedPlayer) {
    case 'A':
      return selectedFighterA === fighter ? this.setState({selectedFighterA: {}}): this.setState({selectedFighterA: fighter});
    case 'B':
      return selectedFighterB === fighter ? this.setState({selectedFighterB: {}}): this.setState({selectedFighterB: fighter});
    case 'C':
      return selectedFighterC === fighter ? this.setState({selectedFighterC: {}}): this.setState({selectedFighterC: fighter});
    case 'D':
      return selectedFighterD === fighter ? this.setState({selectedFighterD: {}}): this.setState({selectedFighterD: fighter});
    default:
      return this.setState({
        selectedFighterA: {},
        selectedFighterB: {},
        selectedFighterC: {},
        selectedFighterD: {}
      });
  }
}
