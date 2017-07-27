# Github Profile

📦   Utility to view different Github profiles and their details. Sample React+Redux+Router exercise.

## Technologies

* Create React App 🚀 (`npm install && npm run start`)
* React+Redux 💮
* React Router v4 ♻️
* Reactstrap + Bootstrap v4 💅🏻

Works in Chrome + Firefox + Safari, untested in IE.

## Achieved

* ✅   Proper compilation / functionality
* ✅   Loading message (partially, ideally should be tied with proper actions, see bottom)
* ✅   Details button takes to new user, close button takes user back
* ✅   Server respects route (this is more of seting up the server to always deliver `index.html`)

## Missing

* 🔴   Loading more users (would need to parse the `link` header from API,
tie that API and update/extend API to receive a parameter).
* 🔴   Tests for 1 Reducer + 1 Component (set up enzyme, but those were
left out due lack of time for the time being)

### Tieing loading to actions
e.g
```javascript
const loading = (state = false, action) => {
	switch (action.type) {
	case 'LOAD_PROFILE':
		return true
	case 'LOAD_PROFILE_COMPLETED':
		return false
	case 'LOAD_PROFILE_ERROR':
		return false
	default:
		return state
	}
}
```