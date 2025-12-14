import { Redirect } from 'expo-router';

export default function App() {
	// return <Redirect href="/(stack)/home" />;
	return <Redirect href="/home" />;
	// return (
	// 	<View className="flex-1 items-center justify-center">
	// 		<Text className="text-3xl font-work-black text-primary">Hola mundo</Text>
	// 		<Text className="text-3xl  text-red-500 font-work-light">Hola mundo</Text>
	// 		<Text className="text-3xl  text-red-500 font-work-medium">
	// 			Hola mundo
	// 		</Text>
	// 		<Link href={'/productos'}>Productos</Link>
	// 	</View>
	// );
}
