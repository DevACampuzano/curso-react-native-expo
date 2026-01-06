import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';

const isAndroid = Platform.OS === 'android';

const TextInputsScreen = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
	});
	return (
		<KeyboardAvoidingView behavior={isAndroid ? undefined : 'height'}>
			<ScrollView>
				<ThemedView margin>
					<ThemedCard className="mb-5">
						<ThemedTextInput
							value={form.name}
							onChangeText={(text) => setForm({ ...form, name: text })}
							placeholder="Nombre"
							autoCapitalize="words"
							autoComplete="name"
						/>
					</ThemedCard>
					<ThemedCard className="mb-5">
						<ThemedTextInput
							value={form.email}
							onChangeText={(text) => setForm({ ...form, email: text })}
							placeholder="Email"
							keyboardType="email-address"
							autoComplete="email"
						/>
					</ThemedCard>
					<ThemedCard className="mb-5">
						<ThemedTextInput
							value={form.phone}
							onChangeText={(text) => setForm({ ...form, phone: text })}
							placeholder="Telefono"
							autoCapitalize="none"
							keyboardType="phone-pad"
							autoComplete="tel"
						/>
					</ThemedCard>

					<ThemedCard className="my-2">
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard className="my-2">
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard className="my-2">
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard className="my-2">
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard className="my-2">
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard className="my-2">
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard className="my-2">
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>
					<ThemedCard
						style={{
							marginBottom: !isAndroid ? 120 : 10,
						}}
					>
						<ThemedTextInput
							value={form.phone}
							onChangeText={(text) => setForm({ ...form, phone: text })}
							placeholder="Telefono"
							autoCapitalize="none"
							keyboardType="phone-pad"
							autoComplete="tel"
						/>
					</ThemedCard>
				</ThemedView>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
export default TextInputsScreen;
