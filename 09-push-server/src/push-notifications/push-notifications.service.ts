import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Expo, ExpoPushMessage, ExpoPushTicket } from "expo-server-sdk";

@Injectable()
export class PushNotificationsService {
    private expo = new Expo({
        useFcmV1: true
    });

    async sendNotification(toTokens: string[]) {
        const areExpoTokens = toTokens.every(Expo.isExpoPushToken);

        if (!areExpoTokens) {
            throw new BadRequestException('Invalid push tokens');
        }

        const messages: ExpoPushMessage[] = toTokens.map(token => ({
            to: token,
            sound: 'default',
            body: 'This is a test notification form my backend',
            title: 'Hola título',
            data: {
                chatId: 'ZYX-456'
            }
        }))

        const chunks = this.expo.chunkPushNotifications(messages);

        const ticket: ExpoPushTicket[] = [];
        for (const chunk of chunks) {
            try {
                const ticketChunk = await this.expo.sendPushNotificationsAsync(chunk);
                ticket.push(...ticketChunk);
            } catch (error) {
                console.log(error);
                throw new InternalServerErrorException('Error sending push notifications chunks')
            }
        }

        return {
            done: true
        }
    }
}