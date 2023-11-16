import { API_KEY } from '$env/static/private';

	//https://getthirukural.appspot.com/api/3.0/kural/{number}?appid=######&format=json
	//https://private-anon-c9b2d135aa-thirukkural.apiary-mock.com/api/3.0/kural/rnd?appid=
    
export async function getRandomKuralApi(){
    const response = await fetch(`https://getthirukural.appspot.com/api/3.0/kural/rnd?appid=${API_KEY}&format=json`);
    const data = response.json();
    return data;
}