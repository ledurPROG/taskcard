import { CircleCheck } from "lucide-react-native";
import { Text, TouchableOpacity, StyleSheet, Touchable, Button, View  } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

const TaskCard = (title, desc, status, onClick) => {
    return (
        <view style={styles.card}>
            <view style={styles.header}>
                <text style={styles.title}>
                    {title}
                </text>
                <CircleCheck color="green" size={32} />
            </view>
            <Text style={styles.description}>{desc}</Text>
            <TouchableOpacity style={styles.button}
                onPress={onClick}>
                <text style={styles.buttontext}>
                    {status === "done" ? 'deletar' : 'check'}
                </text>
            </TouchableOpacity>
        </view>
    )
}

const styles = StyleSheet({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        sahdowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 10
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-betweem',
        alignItems: 'center',
        margimBottom: 10,
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#333'
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#d33f49',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center'
    },
    buttontext: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }


});

export default TaskCard;