import {combineReducers} from 'redux';
import {UPDATE_LOGIN, CLEAR_LOGIN, PLANTS_FETCH_DATA_SUCCESS, GET_USERINFO, UPDATE_PLOT   } from '../actions' //PLANTS_HAVE_ERROR, PLANTS_ARE_LOADING

const plantdata=[
	{
			"_id":"5a29be83734d1d1ee32f467c",
			"name":"beans",
			"type":"fruit",
			"notes":"potatoes and marigolds repel mexican bean beetles. catnip repels flea beetles. corn is a natural trellis, and provides shelter for beans. beans provide nitrogen to soil.",
			"adversary":["beets"," garlic"," kohlrabi","  shallots"," chives"," fennel"," garlic"," leek"," onion"," shallots"," sunflowers"],
			"companion":["broccoli"," brussels sprouts"," cabbage"," carrots"," cauliflower"," cucumber"," celery"," chard"," corn"," eggplant"," kale"," peas"," potatoes"," radishes"," strawberries"]
	},
	{
			"_id":"5a29be98734d1d1ee32f467e",
			"name":"corn",
			"type":"fruit",
			"notes":"soybeans deter chinch bugs.",
			"adversary":["tomato"],
			"companion":["beans"," cucumber"," peas"," pumpkin"," squash"," zucchini"," marjoram"," sunflower"]
	},
	{
			"_id":"5a29bea9734d1d1ee32f4683",
			"name":"cucumbers",
			"type":"fruit",
			"notes":"radishes deter cucumber beetles. cucumbers encourage blight in late potatoes.",
			"adversary":["potato"," tomato","herbs"],
			"companion":["beans"," celery"," corn"," lettuce"," peas"," radish"," dill"," marigold"," nasturtium"]
	},
	{
			"_id":"5a29beb2734d1d1ee32f4684",
			"name":"epplant",
			"type":"fruit",
			"notes":"green beans deter colorado potato beetles.",
			"adversary":[""],
			"companion":["tomato"," beans"," marjoram"," pepper"," potato"]
	},
	{
			"_id":"5a29bebf734d1d1ee32f468b",
			"name":"peppers",
			"type":"fruit",
			"notes":"",
			"adversary":["fennel"," kohlrabi"],
			"companion":["basil"," carrots"," eggplant"," onions"," parsley"," tomatoes"]
	},
	{
			"_id":"5a29beca734d1d1ee32f468f",
			"name":"squash",
			"type":"fruit",
			"notes":"",
			"adversary":["potato"],
			"companion":["beans"," corn"," peas"," radish"," borage"," dill"," marigolds"," nasturtium"," strawberries"," sunflower"]
	},
	{
			"_id":"5a29bed9734d1d1ee32f46a4",
			"name":"tomatoes",
			"type":"fruit",
			"notes":"growing basil about 10 inches from tomatoes increases the yield of the tomato plants.",
			"adversary":["fennel"," kohlrabi"," potatoes"," walnuts"],
			"companion":["asparagus"," basil"," broccoli","brussels sprouts","cabbage","cauliflower"," carrots"," gooseberries"," mustard"," parsley"," Sonions"," rosemary"," sage","stinging nettles"]
	},
	{
			"_id":"5a29bee2734d1d1ee32f46ad",
			"name":"parsley",
			"type":"herb",
			"notes":"draws insects away from tomatoes.",
			"adversary":[""],
			"companion":["corn"," roses"," tomatoes"]
	},
	{
			"_id":"5a29bef3734d1d1ee32f46b4",
			"name":"beets",
			"type":"vegetable",
			"notes":"the beans and beets compete for growth. composted beet leaves add magnesium to soil when mixed.",
			"adversary":["charlock"," field mustard","beans","tomatoes"],
			"companion":["chives"," garlic"," leeks"," onions","broccoli"," brussel sprouts"," cabbage"," cauliflower"," kohlrabi"," lettuce"," radishes"," spinach"]
	},
	{
			"_id":"5a29beff734d1d1ee32f46b9",
			"name":"broccoli ",
			"type":"vegetable",
			"notes":"marigolds repel cabbage moths. nasturtiums repel aphids.",
			"adversary":["asparagus"," climbing beans"," mustard"," peppers"," pumpkin"," sweet corn"," cantaloupe"," strawberry"," watermelon"],
			"companion":["beet"," bush beans"," carrot"," celery"," cucumber"," garlic"," lettuce"," onion"," radish"," spinach"," swiss chard"," basil"," chamomile"," dill"," mint"," rosemary"," sage"," thyme"," marigold"]
	},
	{
			"_id":"5a29bf09734d1d1ee32f46c1",
			"name":"brussels sprouts",
			"type":"vegetable",
			"notes":" marigolds repel cabbage moths. nasturtiums repel aphids.",
			"adversary":["strawberry"," tomato"],
			"companion":["beets"," carrots"," garlic"," onion"," basil"," dill"," thyme"," mint"," nasturtium"," marigold"]
	},
	{
			"_id":"5a29bf19734d1d1ee32f46cb",
			"name":"cabbage",
			"type":"vegetable",
			"notes":"tomatoes and celery repel cabbage worms.  celery, onion and herbs keep pests away. rosemary repels cabbage fly.",
			"adversary":["beans"," eggplant"," mustard"," pepper"," tomato"," strawberry"],
			"companion":["beets"," bush beans"," celery"," onion"," potato"," chamomile"," dill"," mint"," oregano"," rosemary"," sage"," spearmint"," nasturtium"," marigold"]
	},
	{
			"_id":"5a29bf27734d1d1ee32f46d1",
			"name":"carrots",
			"type":"vegetable",
			"notes":"onions, leeks, and wormwood repel carrot flies",
			"adversary":[""],
			"companion":["onions"," leeks"," cabbage"," chives"," early potatoes"," lettuce"," peas"," radishes"," rosemary"," sage"," salsify"," wormwood"]
	},
	{
			"_id":"5a29bf2f734d1d1ee32f46db",
			"name":"cauliflower",
			"type":"vegetable",
			"notes":"",
			"adversary":["rue"," strawberries"],
			"companion":["beans"," celery"," peas"," spinach"," tomato"," chamomile"," oregano"," rosemary"," sage"," sunflower"]
	},
	{
			"_id":"5a29bf42734d1d1ee32f46ea",
			"name":"garlic",
			"type":"vegetable",
			"notes":"deters japanese beetles and aphids. a garlic oil spray deters onion flies, aphids, and ermine moths. a garlic tea helps repel late potato blight.",
			"adversary":["peas"," beans"],
			"companion":["onion"," potato"," green beans"," peppers"," potatoes"," tomatoes"]
	},
	{
			"_id":"5a29bfa8734d1d1ee32f4713",
			"name":"kale",
			"type":"vegetable",
			"notes":"",
			"adversary":["beans"," strawberries"],
			"companion":["herbs"," buckwheat"," broccoli","brussels sprouts","cabbage","cauliflower"," marigolds"," nasturtiums"]
	},
	{
			"_id":"5a29bfb8734d1d1ee32f4716",
			"name":"kohlrabi",
			"type":"vegetable",
			"notes":"kohlrabi stunts tomatoes",
			"adversary":["pepper"," pole beans"," tomato"," strawberries"],
			"companion":["broccoli"," brussels sprouts"," celery"," chard"," spinach"," beets"," cucumber"," lettuce"," onions"," thyme"," nasturtium"]
	},
	{
			"_id":"5a29bfc8734d1d1ee32f471f",
			"name":"lettuce",
			"type":"vegetable",
			"notes":"mints repel slugs (which feed on lettuce).",
			"adversary":["parsley"," cabbage"],
			"companion":["beans"," beets"," broccoli"," carrots"," corn"," onions"," peas"," radish"," mint"," strawberries"," marigold"]
	},
	{
			"_id":"5a29bfef734d1d1ee32f4725",
			"name":"mustard",
			"type":"vegetable",
			"notes":"stimulates growth of companion plants.",
			"adversary":[""],
			"companion":["alfalfa cover crops"," fruit trees"," grapes"," legumes"]
	},
	{
			"_id":"5a29c001734d1d1ee32f4729",
			"name":"onions",
			"type":"vegetable",
			"notes":"deters most pests, especially maggots.",
			"adversary":["beans"," peas"],
			"companion":["beets"," broccoli","brussels sprouts","cabbage","cauliflower"," carrots"," chamomile"," lettuce"," parsnips"]
	},
	{
			"_id":"5a29c00c734d1d1ee32f472a",
			"name":"parsnips",
			"type":"vegetable",
			"notes":"onions and wormwood help keep root maggots from parsnips.",
			"adversary":[""],
			"companion":["onions"," wormwood"," radishes"]
	},
	{
			"_id":"5a29c01c734d1d1ee32f472e",
			"name":"peas",
			"type":"vegetable",
			"notes":"",
			"adversary":["garlic leeks"," onions"," shallots"],
			"companion":["beans"," carrots"," corn"," cucumbers"," early potatoes"," radishes"," turnips"]
	},
	{
			"_id":"5a29c035734d1d1ee32f4740",
			"name":"potato",
			"type":"vegetable",
			"notes":"cucumber, tomato and raspberry attract harmful pests to potatoes. horseradish increases disease resistance.",
			"adversary":["asparagus"," broccoli"," brussels sprouts"," cabbage"," cauliflower"," kohlrabi"," carrots"," cucumbers"," eggplant"," melons"," peppers"," squash"," tomatoes"," raspberries"," strawberries"," sunflower"],
			"companion":["basil"," beans"," broccoli","brussels sprouts","cabbage","cauliflower","beans"," celery"," corn"," garlic"," horseradish"," lettuce"," onions"," peas"," spinach"," radishes"," basil"," marigolds"," corn"," eggplant"," flax"," hemp"," marigolds"," peas"," squash"]
	},
	{
			"_id":"5a29c048734d1d1ee32f474d",
			"name":"radishes",
			"type":"vegetable",
			"notes":"radishes deter cucumber beetles. chervil makes radishes hot. lettuce helps make radishes tender. nasturtiums improve radishes' flavor.",
			"adversary":["hyssop"],
			"companion":["chives"," garlic"," leek"," onion"," beets"," cabbage"," carrots"," cucumber"," kale"," lettuce"," spinach"," squash"]
	},
	{
			"_id":"5a29c056734d1d1ee32f4750",
			"name":"spinach",
			"type":"vegetable",
			"notes":"natural shade is provided by beans and peas, for spinach.",
			"adversary":[""],
			"companion":["beans"," broccoli"," brussels sprouts"," cabbage"," cauliflower"," kohlrabi"," celery"," eggplant"," leeks"," lettuce"," melons"," peas"," potatoes"," radishes"," tomatoes"," nasturtium"," strawberries"
	]}
]
const LoginDefault={
	firstname: {value:"", pristine:"true", valid:false},
  lastname: {value:"", pristine:"true", valid:false},
  email: {value:"", pristine:"true", valid:false},
  pass: {value:"", pristine:"true", valid:false},
  pass2:{value:"", pristine:"true", valid:false}
}
const UserDefault ={
	"username": "catman",
	"email": "catman@mail.com",
	"firstname": "cat",
	"lastname": "man",
	"plots": [
		{
			"name": "My Plot",
			"plotHeight": 2,
			"plotWidth": 5,
			"plants": [
				{
					"name":"tomatoes",
					"row": 0,
					"col":0
				},
				{
					"name":"tomatoes",
					"row": 0,
					"col":3
				},
				{
					"name":"potatoes",
					"row": 1,
					"col":2
				}
			]
		},
		{
			"name": "My Second Plot",
			"plotHeight": 4,
			"plotWidth": 8,
			"plants": [
				{
					"name":"tomatoes",
					"row": 0,
					"col":0
				},
				{
					"name":"tomatoes",
					"row": 0,
					"col":3
				},
				{
					"name":"potatoes",
					"row": 1,
					"col":2
				}
			]
		}
	],
	"created": {
			"$date": "2017-12-28T21:20:17.470Z"
	}
}

const user =( state = {user:UserDefault}, action)=>{
	switch (action.type){
		case GET_USERINFO:
			return ( state={...state, login: action.payload})
		default:
			return state
	}
}



const login = (state={login:LoginDefault}, action)=>{
	switch(action.type){
		case UPDATE_LOGIN:
			return ( state={ ...state, login: action.payload} )
		case CLEAR_LOGIN:
			return( state={ ...state, login:LoginDefault} )
		default:
			return state
	}
}

const plants = ( state={plant:plantdata}, action)=>{
	switch (action.type){
		case PLANTS_FETCH_DATA_SUCCESS:
			return (state={...state, plants: action.payload })
		default:
			return state
	}
}


// const plantsHaveError=(state = false, action)=> {
//     switch (action.type) {
//         case 'PLANTS_HAVE_ERROR':
//             return action.hasError;
//         default:
//             return state;
//     }
// }
//
// const plantsAreLoading=(state = false, action)=> {
//     switch (action.type) {
//         case 'PLANTS_ARE_LOADING':
//             return action.isLoading;
//         default:
//             return state;
//     }
// }

const defaultReducers = {
  user,
  plants,
	// plantsHaveError,
  // plantsAreLoading
}

const reducer = combineReducers({
	...defaultReducers,
})

export default reducer;
