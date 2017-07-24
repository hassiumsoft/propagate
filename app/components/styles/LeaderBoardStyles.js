import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;

export default StyleSheet.create({
    leaderboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    leaderboard_header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: Width * 0.9,
        marginTop: 30,
    },
    leaderboard_score: {
        width: Width * 0.8,
        height: 45,
        padding: 10,
        margin: 2,
        backgroundColor: '#403837',
        borderRadius: 5,
    },
    leaderboard_score_flex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leaderboard_score_text_1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'left',
        marginLeft: 5,
        color: '#f2f2f2',
        fontSize: 12,
        fontFamily: 'MontserratBold',
    },
    leaderboard_score_text_2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#f2f2f2',
        fontSize: 10,
        fontFamily: 'MontserratRegular',
    },
    leaderboard_score_text_3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'right',
        marginRight: 5,
        color: '#f2f2f2',
        fontSize: 18,
        fontFamily: 'MontserratBold',
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backToMenu: {
        backgroundColor: '#BE3E2C',
        padding: 5,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 5,
        marginBottom: 20,
        flex: 1,
        justifyContent: 'center',
    },
    menuText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#f2f2f2',
        fontFamily: 'MontserratBold',
    },
    scoreText: {
        fontSize: 20,
        padding: 5,
        paddingLeft: 8,
        paddingRight: 8,
        fontFamily: 'MontserratBold',
    },
    scoreElement: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreBox: {
        backgroundColor: '#ff9900',
        padding: 5,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 5,
        marginBottom: 20,
        width: '95%',
        flex: 1,
        justifyContent: 'center',
    },
});
