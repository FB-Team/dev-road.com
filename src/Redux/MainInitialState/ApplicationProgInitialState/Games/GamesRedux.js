import { addLearningRateQuestion } from '../../HelperFunctions';
import CocosBranch from './Stack/CocosBranch/CocosBranch';
import UnityBranch from './Stack/UnityBranch/UnityBranch';
import UnrealEngineBranch from './Stack/UnrealEngineBranch/UnrealEngineBranch';


const Games = {
  meta: {
    hasChildren: true,
    path:        '/application-prog/games',
    id: 'Games'
  },
  data:{
    proftitle: "Игры",
    profdesc: "Популярное и высокооплачеваемое направление в IT индустрии"
  },
  children: []
}
Games.data.expanded = {
	desc: `<p>В современном обществе мы вряд-ли сможем найти человека, который бы ни разу не слышал о компютерных играх, или бы ни разу не играл в одну из них. Кто-то не очень любит играть в игры, кто-то от них без ума и с нетерпением ждет игровых новинок, а кто-то их создает. Таких людей принято называть разработчиками игр. Но кто они такие, что делают и как им стать? На эти вопросы мы и постараемся ответить.</p><p><strong>Разработчик игр - это человек, участвующий в создании игр на различных этапах разработки. Разработка игр ассоциируется с кодингом, но это не совсем так, ведь для того что бы создать игру необходимо совметсная работа программистов с художниками, геймдизайнерами, звукорежиссерами и т.д. </strong>Тем не менее, мы будем акцентироваться на направлениях, непосредственно занимающихся программированием.</p><p>Тут следует ненадолго отойти от теми и упомянуть, что игровая индустрия, вероятно, стоит на пороге больших перемен. Интерес в стриминговых сервисах все возрастает, а консоли все прочнее закрепляются на рыноке из-за высокой доходности, в то время как пк-ориетированные игровые студии все еще не смогли побороть проблему пиратства. Поэтому, вероятно, некторые технологии в скором времени могут стать устаревшими в разработке, обязательно учтите это  при выборе связки навыков.</p><p> Современный геймдев настолько обширен, что в крупных проектах професия "разработчик игр" не самодостаточное и независимое направление, а скорее совокупность направлений, где каждый специалист занимается созданием продукта в своей области. Это позволяет значительно упростить разработку и улучшить качество конечного продукта. Но что в таком случае делать человеку, который хочет начать свое восхождение в данной сфере?</p><p>Для начала рекомендуется изучить основы программирования и один из популярных игровых движков. Создав несколько собственных проектов, необходимо начать поиски работы. После освоения основ и получения реального практического опыта в геймдеве, вы сами сможете определиться,какое направление лучше подходит для вас. Возможно, вас заинтересует геймдизайн, где вы сможете вовсю реализовать ваш творческий потенциал, при этом опираясь на преобретенные технические знания. А может, вам понравится разрабатывать и улучшать игровые движки и вы будете получать удовольствие оптимизируя игру и добавляя в нее новые механики. Никто не может ответить на этот вопрос, кроме вас, но вы сможете это сделать только освоив одноу из связок навыков, представленных ниже:</p>`,
	imgPath: '', 
	tools: [UnityBranch, UnrealEngineBranch, CocosBranch],
	prosAndCons: {
		pros: ["Высокая оплата труда", "Перспективы", "Невысокий порог входа"],
		cons: ["Высокая конкуренция", "Трудно устроиться в большую компанию (новичку)"]
	},
	profsAlike: {
		ids: ['BackEnd', 'Mobile'],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: 'Чтобы создавать игры вы должны любить их. Но не каждый геймер способен полюбить их разработку. Разрабатывать игры это не развлечение и требует значительных усилий.',
	popularQuest: [{
		name: 'Какая средняя зарплата специалиста?',
		target: 'от 300$ до 1000$ для начинающего, ~1700$ и больше для middle разработчика'
	}, addLearningRateQuestion('Зависит от выбранных параметров, от 6 месяцев 1 года и больше')]
}
export default Games
