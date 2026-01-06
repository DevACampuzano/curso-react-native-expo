import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';

const PullToRefreshScreen = () => {
	const primaryColor = useThemeColor({}, 'primary');
	const backgroundColor = useThemeColor(
		{
			dark: '#000',
			light: '#fff',
		},
		'background',
	);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	};
	return (
		<ScrollView
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					colors={[primaryColor]}
					progressBackgroundColor={backgroundColor}
				/>
			}
		>
			<ThemedView margin>
				<ThemedText>PullToRefreshScreen</ThemedText>
			</ThemedView>
		</ScrollView>
	);
};
export default PullToRefreshScreen;
