class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    #ChatMessage.create(user_id: sender.id, content: message)
    params = {action: 'receive_message', text: data["text"], user: data["user"]}
    ActionCable.server.broadcast 'chat_channel', params
  end
end
