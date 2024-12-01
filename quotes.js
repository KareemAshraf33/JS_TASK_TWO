const quotes = [
    {'author': 'Mark Twain', 
     'quote': 'If you tell the truth, you don\'t have to remember anything.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Dr. Seuss', 
     'quote': 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.'
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Albert Einstein', 
     'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
    },
];


function generateQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteOutput").innerHTML = quotes[random].quote;
    document.getElementById("authorOutput").innerHTML = quotes[random].author;
}