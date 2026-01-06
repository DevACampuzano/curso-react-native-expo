import { useState } from 'react';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';

const Switches = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	return (
		<ThemedView margin className="mt-2">
			<ThemedCard>
				{/* <Switch
					trackColor={{ false: '#767577', true: '#81b0ff' }}
					thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
					ios_backgroundColor="#3e3e3e"
					onValueChange={toggleSwitch}
					value={isEnabled}
				/> */}
				<ThemedSwitch
					text="Activo"
					value={isEnabled}
					onValueChange={toggleSwitch}
					className="mb-4"
				/>
				<ThemedSwitch
					text="Activo"
					value={isEnabled}
					onValueChange={toggleSwitch}
					className="mb-4"
				/>
				<ThemedSwitch
					text="Activo"
					value={isEnabled}
					onValueChange={toggleSwitch}
					className="mb-4"
				/>
				<ThemedSwitch
					text="Activo"
					value={isEnabled}
					onValueChange={toggleSwitch}
					className="mb-4"
				/>
			</ThemedCard>
		</ThemedView>
	);
};
export default Switches;
