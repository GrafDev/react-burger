const DATA = 'https://norma.nomoreparties.space/api/ingredients';

function addCount(data){
	console.log('Count added')
	return data.data.map(elem =>{
		elem.count=0
		return elem
	})
}

function ReadData(state, setState) {
	const getData = async () => {
		setState({...state, hasError: false, isLoading: true});
		fetch(DATA)
			.then(res => res.json())
			.then(data => {
				setState({...state, data: addCount(data), isLoading: false})
			})
			.catch(e => {
				setState({...state, hasError: true, isLoading: false});
			});
	};
	getData().then(r => console.log('Loaded'));
}

export default ReadData;