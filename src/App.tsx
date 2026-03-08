/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  Video, 
  Headphones, 
  BookOpen, 
  ChevronDown, 
  ChevronUp,
  Heart,
  Sparkles,
  ArrowRight,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-rose-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-sage-600" /> : <ChevronDown className="h-5 w-5 text-sage-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-sage-200 selection:text-sage-700">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-rose-100 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-sage-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-200 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-sage-700 uppercase bg-sage-100 rounded-full">
              Programme RESET
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight max-w-5xl mx-auto">
              Libérez-vous du poids de votre passé et redonnez un <span className="italic text-sage-600">sens profond</span> à votre vie.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-serif italic">
              Un accompagnement transformationnel par l’hypnose pour apaiser vos blessures d’enfance, dissoudre vos blocages émotionnels et renaître à la joie de vivre.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-sage-600 text-white rounded-full font-semibold text-lg hover:bg-sage-700 transition-all shadow-lg shadow-sage-600/20 flex items-center gap-2 group"
              >
                Commencer ma renaissance
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 border border-sage-200 text-sage-700 rounded-full font-semibold text-lg hover:bg-sage-50 transition-all"
              >
                En savoir plus
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Est-ce que vous vous reconnaissez dans l'une de ces situations ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Vous avez l'impression de porter un \"sac à dos émotionnel\" beaucoup trop lourd, rempli des épreuves et des tempêtes de votre parcours de vie.",
                "Vous vous sentez freiné(e) au quotidien par des croyances limitantes (l'impression de ne pas mériter le bonheur, de ne pas être à la hauteur).",
                "Certaines blessures d'enfance (rejet, abandon, trahison...) sont encore à vif et impactent douloureusement vos choix d'aujourd'hui.",
                "Malgré vos efforts, vous ressentez un vide, une perte de sens, ou une difficulté à ressentir de la joie simple et authentique."
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 rounded-2xl bg-rose-50 border border-rose-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Heart className="w-5 h-5 text-sage-600" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Transition */}
      <section className="py-20 bg-sage-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0 60 Q 25 35 50 60 T 100 60" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ce n'est pas de votre faute.</h2>
            <p className="text-xl md:text-2xl font-serif italic mb-8 opacity-90">
              "Face aux difficultés de la vie, votre esprit inconscient a fait tout ce qu'il pouvait pour vous protéger. Il a construit des murs, enfoui des émotions... Mais aujourd'hui, ces boucliers sont devenus des prisons."
            </p>
            <p className="text-lg opacity-80">
              La bonne nouvelle, c'est que vous n'avez pas à porter cette charge émotionnelle jusqu'à la fin de vos jours. Vous pouvez apprendre à votre esprit à relâcher ce qui ne vous sert plus, en toute sécurité.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-rose-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800" 
                  alt="Hypnose et sérénité" 
                  className="rounded-3xl shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-200 rounded-full z-0 blur-2xl opacity-50" />
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-rose-200 rounded-full z-0 blur-2xl opacity-50" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                C'est pour cela que j'ai créé le <span className="text-sage-600">Programme RESET</span>.
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                RESET n'est pas juste une série de séances. C'est un véritable processus de "réinitialisation" émotionnelle. Grâce à l'hypnose, nous n'allons pas agir en surface, mais aller discuter directement avec la partie la plus profonde de vous-même : votre inconscient.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                L'hypnose est un état naturel et très doux. Vous gardez le contrôle à chaque instant. Elle permet de reprogrammer vos émotions, de cicatriser vos blessures anciennes sans avoir besoin de revivre vos traumatismes dans la souffrance.
              </p>
              <div className="space-y-4">
                {[
                  "État naturel et sécurisant",
                  "Reprogrammation émotionnelle profonde",
                  "Libération des croyances limitantes",
                  "Cicatrisation des blessures anciennes"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
            Imaginez votre vie après le programme RESET...
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { title: "La Légèreté", desc: "Vous vous réveillez le matin en ressentant une profonde paix intérieure, libéré(e) du poids du passé.", icon: Sparkles },
              { title: "La Liberté", desc: "Vous osez enfin être vous-même, faire vos propres choix, sans être dicté(e) par vos peurs.", icon: Heart },
              { title: "La Joie", desc: "Vous retrouvez cette capacité incroyable à vous émerveiller, à rire sincèrement et à savourer l'instant présent.", icon: Sparkles },
              { title: "Le Sens", desc: "Votre parcours de vie compliqué devient une force. Vous savez où vous allez.", icon: ArrowRight }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-rose-50 border border-rose-100 text-center"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <benefit.icon className="w-7 h-7 text-sage-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-24 bg-rose-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Que contient le Programme RESET ?
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Un accompagnement complet sur-mesure pour vous garantir une transformation profonde et durable.
            </p>
            
            <div className="grid gap-6">
              {[
                { 
                  icon: Video, 
                  title: "12 Séances d'hypnose en visio", 
                  desc: "45 minutes chacune. Un accompagnement profond, étalé dans le temps, pour avancer à votre rythme depuis votre cocon." 
                },
                { 
                  icon: Headphones, 
                  title: "2 Audios MP3 d'hypnose", 
                  desc: "Conçus sur-mesure pour prolonger le travail entre nos séances. À écouter le soir pour ancrer les changements." 
                },
                { 
                  icon: BookOpen, 
                  title: "1 Carnet de suivi PDF", 
                  desc: "Un outil d'introspection puissant pour poser vos pensées, suivre votre évolution et célébrer vos victoires." 
                },
                { 
                  icon: MessageCircle, 
                  title: "1 Mois d'accès privé via WhatsApp", 
                  desc: "Vous n'êtes jamais seul(e). Je suis disponible pour répondre à vos doutes et vous soutenir entre deux séances." 
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-white rounded-3xl shadow-sm border border-rose-200">
                  <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Qui suis-je pour vous accompagner ?
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Je m'appelle <span className="font-bold text-sage-600">Audrey</span>, et je suis hypnothérapeute. Mon approche est basée sur la bienveillance, le non-jugement et la sécurité émotionnelle.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Je crois profondément que chaque être humain possède en lui les ressources pour s'en libérer et renaître. Je suis là pour vous tenir la main et vous guider vers vos propres ressources intérieures.
              </p>
              <div className="p-6 bg-rose-50 rounded-2xl border-l-4 border-sage-600 italic font-serif text-slate-700">
                "Ma mission est de vous aider à transformer vos épreuves en forces et à retrouver l'éclat de votre joie de vivre."
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" 
                  alt="Audrey - Hypnothérapeute" 
                  className="rounded-full w-80 h-80 md:w-96 md:h-96 object-cover mx-auto shadow-2xl border-8 border-rose-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-sage-200 rounded-full -z-10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-rose-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
            Ils ont fait un "RESET" dans leur vie :
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "Avant de rencontrer Audrey, j'avais l'impression de traîner des boulets attachés à mes chevilles depuis mon enfance. Les séances en visio ont été d'une douceur incroyable. Aujourd'hui, je me sens enfin moi-même.",
                author: "Marie"
              },
              {
                text: "J'étais très sceptique sur l'hypnose à distance, mais la bienveillance d'Audrey a su me rassurer. Le carnet de bord et le suivi WhatsApp font toute la différence. J'ai pu me libérer d'une colère que je portais depuis 15 ans.",
                author: "Thomas"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-rose-200 relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-sage-100" />
                <p className="text-lg text-slate-700 mb-6 italic leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-1px bg-sage-600" />
                  <span className="font-bold text-slate-900">{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-rose-100 rounded-[3rem] p-8 md:p-16 text-center border border-rose-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage-200 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 relative z-10">
              Prêt(e) à tourner la page et à commencer votre renaissance ?
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto relative z-10">
              Le Programme RESET est un engagement envers vous-même, un investissement pour votre bien-être futur.
            </p>
            
            <div className="mb-12 relative z-10">
              <div className="inline-block bg-white px-8 py-10 rounded-3xl shadow-xl border border-rose-200">
                <span className="text-slate-400 line-through text-xl block mb-2">1350 €</span>
                <span className="text-5xl md:text-6xl font-bold text-sage-600 block mb-4">1247 €</span>
                <p className="text-slate-500 font-medium mb-6">Accompagnement complet</p>
                <div className="flex flex-col gap-3 text-left mb-8">
                  {["12 séances en visio", "2 audios personnalisés", "Carnet de suivi PDF", "1 mois de suivi WhatsApp"].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-sage-600" />
                      {feat}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-sage-600 text-white rounded-2xl font-bold text-xl hover:bg-sage-700 transition-all shadow-lg shadow-sage-600/20">
                  Oui, je réserve mon Programme RESET
                </button>
                <p className="mt-4 text-slate-500 text-sm">
                  Possibilité de règlement en 3 ou 4 fois
                </p>
              </div>
            </div>
            
            <p className="text-slate-500 text-sm relative z-10">
              Paiement sécurisé. Places limitées pour garantir la qualité de l'accompagnement.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-rose-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Foire Aux Questions
            </h2>
            <div className="space-y-2">
              <FAQItem 
                question="Est-ce que l'hypnose en visio est aussi efficace qu'en cabinet ?"
                answer="Oui, absolument ! L'hypnose est un état d'hyper-concentration. Être chez vous, dans votre environnement familier, avec vos écouteurs ou votre casque, vous permet très souvent de lâcher prise plus rapidement et de vous sentir pleinement en sécurité."
              />
              <FAQItem 
                question="Vais-je perdre le contrôle ou devoir revivre mes traumatismes ?"
                answer="Non, jamais. En hypnose thérapeutique, vous restez conscient(e) et gardez le contrôle total. De plus, mon approche est extrêmement douce : nous n'avons pas besoin de vous faire revivre des souvenirs douloureux pour que l'inconscient s'en libère."
              />
              <FAQItem 
                question="Je n'arrive pas à me détendre en général, vais-je être réceptif(ve) ?"
                answer="C'est une crainte très courante, mais rassurez-vous : tout le monde est réceptif à l'hypnose, car c'est un état naturel que nous expérimentons tous. Mon rôle est simplement de vous guider pour y accéder. Il suffit de vous laisser porter par le son de ma voix."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-white font-serif text-2xl mb-6">Audrey Hypnothérapeute</h3>
          <p className="max-w-md mx-auto mb-8">
            Accompagnement transformationnel pour une vie plus légère et pleine de sens.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm opacity-50">
            &copy; {new Date().getFullYear()} Audrey Hypnothérapeute. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
