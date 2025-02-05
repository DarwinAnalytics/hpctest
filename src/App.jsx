import React, { useState, useEffect } from 'react';
import { Smile, Frown, Meh } from 'lucide-react';

// Basic UI components
const Card = ({ className, children, ...props }) => (
  <div
    className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ className, children, ...props }) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardTitle = ({ className, children, ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardContent = ({ className, children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

// Tabs Component
const TabsContext = React.createContext({});

const Tabs = ({ value, onValueChange, children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue || value);

  useEffect(() => {
    if (value !== undefined) {
      setActiveTab(value);
    }
  }, [value]);

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleTabChange }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ className, children, ...props }) => (
  <div
    className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const TabsTrigger = ({ className, value, children, ...props }) => {
  const { activeTab, handleTabChange } = React.useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all
        ${isActive ? 'bg-white text-gray-900 shadow-sm' : 'hover:bg-gray-50'} ${className}`}
      onClick={() => handleTabChange(value)}
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ className, value, children, ...props }) => {
  const { activeTab } = React.useContext(TabsContext);
  if (value !== activeTab) return null;

  return (
    <div className={`mt-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Input Components
const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => (
  <input
    type={type}
    className={`flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 
      focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900
      focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

// Button Component
const Button = React.forwardRef(({ className, variant = "default", children, ...props }, ref) => {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
    ghost: "hover:bg-gray-50",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50
        ${variants[variant]} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

// Select Components
const Select = React.forwardRef(({ children, value, onValueChange }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = React.useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <SelectContext.Provider value={{ isOpen, setIsOpen, value, onValueChange }}>
        {children}
      </SelectContext.Provider>
    </div>
  );
});
Select.displayName = "Select";

// Create context for Select
const SelectContext = React.createContext();

const useSelect = () => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error('Select components must be used within a Select component');
  }
  return context;
};

const SelectTrigger = React.forwardRef(({ children, className, ...props }, ref) => {
  const { isOpen, setIsOpen } = useSelect();

  return (
    <button
      ref={ref}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900
        focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      {...props}
    >
      {children}
      <span className="ml-2 opacity-50">▼</span>
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = React.forwardRef(({ placeholder, className, ...props }, ref) => {
  const { value } = useSelect();
  
  return (
    <span ref={ref} className={`block truncate ${value ? '' : 'text-gray-500'} ${className}`} {...props}>
      {value || placeholder}
    </span>
  );
});
SelectValue.displayName = "SelectValue";

const SelectContent = React.forwardRef(({ children, className, ...props }, ref) => {
  const { isOpen } = useSelect();
  
  if (!isOpen) return null;
  
  return (
    <div
      ref={ref}
      className={`absolute z-50 w-full min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white mt-1 shadow-lg ${className}`}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
});
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef(({ children, value: itemValue, className, ...props }, ref) => {
  const { onValueChange, setIsOpen } = useSelect();
  
  return (
    <div
      ref={ref}
      className={`relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none hover:bg-gray-100 ${className}`}
      onClick={() => {
        onValueChange?.(itemValue);
        setIsOpen(false);
      }}
      {...props}
    >
      {children}
    </div>
  );
});
SelectItem.displayName = "SelectItem";








// Alert Components
const Alert = ({ className, children, ...props }) => (
  <div
    role="alert"
    className={`relative w-full rounded-lg border p-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const AlertDescription = ({ className, children, ...props }) => (
  <div className={`text-sm ${className}`} {...props}>
    {children}
  </div>
);

// Curriculum Goals Data Structure
const CURRICULUM_GOALS = {
  physical: {
    title: "Physical Development",
    goals: [
      {
        id: "goal1",
        title: "Children develop habits that keep them healthy & safe",
        competencies: [
          { id: "C-1.1", text: "Shows a liking for and understanding of nutritious food and does not waste food" },
          { id: "C-1.2", text: "Practices basic self-care and hygiene" },
          { id: "C-1.6", text: "Understands unsafe situations and asks for help" }
        ]
      },
      {
        id: "goal2",
        title: "Children develop sharpness in sensorial perceptions",
        competencies: [
          { id: "C-2.1", text: "Differentiates between shapes, colours, and their shades" },
          { id: "C-2.4", text: "Differentiates multiple smells and tastes" },
          { id: "C-2.5", text: "Develops discrimination in the sense of touch" }
        ]
      },
      {
        id: "goal3",
        title: "Children develop a fit and flexible body",
        competencies: [
          { id: "C-3.2", text: "Shows balance, coordination and flexibility in various physical activities" },
          { id: "C-3.3", text: "Shows precision and control in working with their hands and fingers" },
          { id: "C-3.4", text: "Shows strength and endurance in carrying, walking and running" }
        ]
      }
    ]
  },
  social: {
    title: "Socio-emotional & ethical development",
    goals: [
      {
        id: "goal4",
        title: "Children develop emotional intelligence",
        competencies: [
          { id: "C-4.1", text: "Starts recognising 'self' as an individual belong to a family and community" },
          { id: "C-4.2", text: "Recognises different emotions and makes deliberate effort to regulate them appropriately" },
          { id: "C-4.3", text: "Interacts comfortably with other children and adults" },
          { id: "C-4.6", text: "Shows kindness and helpfulness to others (including animals, plants) when they are in need" }
        ]
      }
    ]
  },
  cognitive: {
    title: "Cognitive development",
    goals: [
      {
        id: "goal7",
        title: "Children make sense of world around through observation and logical thinking",
        competencies: [
          { id: "C-7.1", text: "Observes and understands different categories of objects and relationships between them" },
          { id: "C-7.2", text: "Observes and understands cause and effect relationships in nature" }
        ]
      },
      {
        id: "goal8",
        title: "Children develop mathematical understanding",
        competencies: [
          { id: "C-8.1", text: "Sorts objects into groups and sub-group based on more than one property" },
          { id: "C-8.2", text: "Identifies and extends simple patterns in their surroundings, shapes, and numbers" },
          { id: "C-8.5", text: "Recognises and uses numerals to represent quantities up to 99" }
        ]
      }
    ]
  },
  language: {
    title: "Language and literacy development",
    goals: [
      {
        id: "goal9",
        title: "Children develop effective communication skills",
        competencies: [
          { id: "C-9.1", text: "Listens to and appreciates simple songs, rhymes, and poems" },
          { id: "C-9.3", text: "Converses fluently and can hold a meaningful conversation" },
          { id: "C-9.4", text: "Understands and gives clear oral instructions" }
        ]
      }
    ]
  },
  artistic: {
    title: "Aesthetic & cultural development",
    goals: [
      {
        id: "goal12",
        title: "Children develop abilities in visual and performing arts",
        competencies: [
          { id: "C-12.1", text: "Creates two-dimensional and three-dimensional artworks" },
          { id: "C-12.2", text: "Explores music, role-play, dance, and movement" }
        ]
      }
    ]
  }
};

// Initial state structure
const initialState = {
  basicInfo: {
    name: "",
    thingsILike: "",
    liveIn: "",
    birthday: "",
    friends: "",
    favorites: {
      colors: "",
      foods: "",
      games: "",
      animals: ""
    },
    photo: null,
    familyPhoto: null
  },
  measurements: {
    term1: { height: "", weight: "" },
    term2: { height: "", weight: "" }
  },
  competencies: {
    term1: {},
    term2: {}
  },
  selfAssessment: {
    term1: {
      enjoyMost: [],
      findDifficult: [],
      enjoyWithFriends: []
    },
    term2: {
      enjoyMost: [],
      findDifficult: [],
      enjoyWithFriends: []
    }
  },
  peerAssessment: {
    term1: {
      helpsOthers: "neutral",
      playsWithOthers: "neutral",
      sharesStationery: "neutral"
    },
    term2: {
      helpsOthers: "neutral",
      playsWithOthers: "neutral",
      sharesStationery: "neutral"
    }
  },
  teacherNarrative: "",
  parentFeedback: {
    term1: {
      enjoys: "",
      needsSupport: "",
      additionalInfo: "",
      vaccination: false
    },
    term2: {
      enjoys: "",
      needsSupport: "",
      additionalInfo: "",
      vaccination: false
    }
  },
  portfolio: {
    term1: [],
    term2: []
  },
  signatures: {
    term1: {
      parent: null,
      teacher: null,
      principal: null,
      date: ""
    },
    term2: {
      parent: null,
      teacher: null,
      principal: null,
      date: ""
    }
  }
};

const App = () => {
  const [studentData, setStudentData] = useState(initialState);
  const [currentTerm, setCurrentTerm] = useState("term1");
  const [showSuccess, setShowSuccess] = useState(false);

  // Handler for basic info updates
  const handleBasicInfoChange = (field, value) => {
    setStudentData(prev => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        [field]: value
      }
    }));
  };

  // Handler for photo uploads
  const handlePhotoUpload = (type) => (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentData(prev => ({
          ...prev,
          basicInfo: {
            ...prev.basicInfo,
            [type]: reader.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler for competency updates
  const handleCompetencyChange = (term, competencyId, value) => {
    setStudentData(prev => ({
      ...prev,
      competencies: {
        ...prev.competencies,
        [term]: {
          ...prev.competencies[term],
          [competencyId]: value
        }
      }
    }));
  };

  // Handler for signature uploads
  const handleSignatureUpload = (term, type) => (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentData(prev => ({
          ...prev,
          signatures: {
            ...prev.signatures,
            [term]: {
              ...prev.signatures[term],
              [type]: reader.result
            }
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Save progress card data
  const handleSave = () => {
    localStorage.setItem('progressCardData', JSON.stringify(studentData));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('progressCardData');
    if (savedData) {
      setStudentData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 py-6">
          <div className="flex justify-between items-center">
            <img 
              src="/api/placeholder/80/80" 
              alt="Azadi ka Amrit Mahotsav" 
              className="h-20 object-contain"
            />
            <div className="text-center">
              <CardTitle className="text-3xl font-bold text-blue-800 mb-2">
                Holistic Progress Card
              </CardTitle>
              <p className="text-lg text-gray-700">Academic Year 2023-2024</p>
              <p className="text-sm text-gray-600">
                Foundational Stage (Age group 3-6 years)
              </p>
              <div className="mt-3">
                <p className="text-xs text-gray-500">
                  Centre for Excellence in Assessment
                </p>
                <p className="text-xs text-gray-500">CBSE</p>
              </div>
            </div>
            <img 
              src="/api/placeholder/80/80" 
              alt="CBSE Logo" 
              className="h-20 object-contain"
            />
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs defaultValue="about" className="space-y-6">
            <TabsList className="grid grid-cols-7 w-full bg-blue-50 p-1 rounded-lg">
              <TabsTrigger 
                value="about"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                About Me
              </TabsTrigger>
              <TabsTrigger 
                value="competencies"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Competencies
              </TabsTrigger>
              <TabsTrigger 
                value="self"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Self Assessment
              </TabsTrigger>
              <TabsTrigger 
                value="peer"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Peer Assessment
              </TabsTrigger>
              <TabsTrigger 
                value="teacher"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Teacher's Profile
              </TabsTrigger>
              <TabsTrigger 
                value="parent"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Parent's Feedback
              </TabsTrigger>
              <TabsTrigger 
                value="portfolio"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Portfolio
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Basic Information */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">
                      All about me
                    </h3>
                    <div className="space-y-4">
                      <Input 
                        placeholder="My name is"
                        value={studentData.basicInfo.name}
                        onChange={(e) => handleBasicInfoChange('name', e.target.value)}
                      />
                      <Input 
                        placeholder="Things I like"
                        value={studentData.basicInfo.thingsILike}
                        onChange={(e) => handleBasicInfoChange('thingsILike', e.target.value)}
                      />
                      <Input 
                        placeholder="I live in"
                        value={studentData.basicInfo.liveIn}
                        onChange={(e) => handleBasicInfoChange('liveIn', e.target.value)}
                      />
                      <Input 
                        type="date"
                        placeholder="My birthday"
                        value={studentData.basicInfo.birthday}
                        onChange={(e) => handleBasicInfoChange('birthday', e.target.value)}
                      />
                      <Input 
                        placeholder="My friends are"
                        value={studentData.basicInfo.friends}
                        onChange={(e) => handleBasicInfoChange('friends', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Favorites */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">
                      My Favourites
                    </h3>
                    <div className="space-y-4">
                      <Input 
                        placeholder="Colours"
                        value={studentData.basicInfo.favorites.colors}
                        onChange={(e) => setStudentData(prev => ({
                          ...prev,
                          basicInfo: {
                            ...prev.basicInfo,
                            favorites: {
                              ...prev.basicInfo.favorites,
                              colors: e.target.value
                            }
                          }
                        }))}
                      />
                                            <Input 
                        placeholder="Foods"
                        value={studentData.basicInfo.favorites.foods}
                        onChange={(e) => setStudentData(prev => ({
                          ...prev,
                          basicInfo: {
                            ...prev.basicInfo,
                            favorites: {
                              ...prev.basicInfo.favorites,
                              foods: e.target.value
                            }
                          }
                        }))}
                      />
                      <Input 
                        placeholder="Games"
                        value={studentData.basicInfo.favorites.games}
                        onChange={(e) => setStudentData(prev => ({
                          ...prev,
                          basicInfo: {
                            ...prev.basicInfo,
                            favorites: {
                              ...prev.basicInfo.favorites,
                              games: e.target.value
                            }
                          }
                        }))}
                      />
                      <Input 
                        placeholder="Animals"
                        value={studentData.basicInfo.favorites.animals}
                        onChange={(e) => setStudentData(prev => ({
                          ...prev,
                          basicInfo: {
                            ...prev.basicInfo,
                            favorites: {
                              ...prev.basicInfo.favorites,
                              animals: e.target.value
                            }
                          }
                        }))}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Photos Section */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">A glimpse of myself</h3>
                    <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg relative">
                      {studentData.basicInfo.photo ? (
                        <img 
                          src={studentData.basicInfo.photo} 
                          alt="Student" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <p className="text-gray-500">Click to upload photo</p>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload('photo')}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Family Photo Section */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">A glimpse of my family</h3>
                    <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg relative">
                      {studentData.basicInfo.familyPhoto ? (
                        <img 
                          src={studentData.basicInfo.familyPhoto} 
                          alt="Family" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <p className="text-gray-500">Click to upload family photo</p>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload('familyPhoto')}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Measurements Section */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">My Measurements</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {/* Term 1 */}
                      <div>
                        <p className="font-medium mb-2">Term 1</p>
                        <div className="space-y-3">
                          <Input 
                            type="number"
                            placeholder="Height (hand spans)"
                            value={studentData.measurements.term1.height}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              measurements: {
                                ...prev.measurements,
                                term1: {
                                  ...prev.measurements.term1,
                                  height: e.target.value
                                }
                              }
                            }))}
                          />
                          <Input 
                            type="number"
                            placeholder="Weight (kgs)"
                            value={studentData.measurements.term1.weight}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              measurements: {
                                ...prev.measurements,
                                term1: {
                                  ...prev.measurements.term1,
                                  weight: e.target.value
                                }
                              }
                            }))}
                          />
                        </div>
                      </div>

                      {/* Term 2 */}
                      <div>
                        <p className="font-medium mb-2">Term 2</p>
                        <div className="space-y-3">
                          <Input 
                            type="number"
                            placeholder="Height (hand spans)"
                            value={studentData.measurements.term2.height}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              measurements: {
                                ...prev.measurements,
                                term2: {
                                  ...prev.measurements.term2,
                                  height: e.target.value
                                }
                              }
                            }))}
                          />
                          <Input 
                            type="number"
                            placeholder="Weight (kgs)"
                            value={studentData.measurements.term2.weight}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              measurements: {
                                ...prev.measurements,
                                term2: {
                                  ...prev.measurements.term2,
                                  weight: e.target.value
                                }
                              }
                            }))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="competencies">
              <Tabs defaultValue="term1" className="space-y-6">
                <TabsList className="grid w-[200px] grid-cols-2 mx-auto">
                  <TabsTrigger value="term1">Term 1</TabsTrigger>
                  <TabsTrigger value="term2">Term 2</TabsTrigger>
                </TabsList>

                {["term1", "term2"].map((term) => (
                  <TabsContent key={term} value={term} className="space-y-8">
                    {Object.entries(CURRICULUM_GOALS).map(([domain, { title, goals }]) => (
                      <div key={domain} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-blue-800 mb-6">{title}</h3>
                        <div className="space-y-8">
                          {goals.map((goal) => (
                            <div key={goal.id} className="space-y-4">
                              <h4 className="text-lg font-medium text-gray-700">{goal.title}</h4>
                              <div className="grid gap-4">
                                {goal.competencies.map((competency) => (
                                  <div key={competency.id} className="grid grid-cols-3 gap-4 items-center bg-gray-50 p-4 rounded-lg">
                                    <div className="col-span-2">
                                      <p className="text-sm text-gray-700">{competency.text}</p>
                                    </div>
                                    <Select
                                      value={studentData.competencies[term][competency.id] || ""}
                                      onValueChange={(value) => handleCompetencyChange(term, competency.id, value)}
                                    >
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select level" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Beginner">Beginner</SelectItem>
                                        <SelectItem value="Progressing">Progressing</SelectItem>
                                        <SelectItem value="Proficient">Proficient</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>

            <TabsContent value="self">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Self Assessment</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Self reflection on inter-disciplinary activity done by the child.
                  Example: Clay work, drawing, playing a game, colouring, puppet-making, model making, etc.
                </p>

                <Tabs defaultValue="term1">
                  <TabsList className="grid w-[200px] grid-cols-2 mx-auto mb-6">
                    <TabsTrigger value="term1">Term 1</TabsTrigger>
                    <TabsTrigger value="term2">Term 2</TabsTrigger>
                  </TabsList>

                  {["term1", "term2"].map((term) => (
                    <TabsContent key={term} value={term}>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            1. Activities that I enjoy the most
                          </label>
                          <Textarea 
                            placeholder="Enter activities..."
                            value={studentData.selfAssessment[term].enjoyMost}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              selfAssessment: {
                                ...prev.selfAssessment,
                                [term]: {
                                  ...prev.selfAssessment[term],
                                  enjoyMost: e.target.value
                                }
                              }
                            }))}
                            className="min-h-[100px]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            2. Activities that I find difficult to do
                          </label>
                          <Textarea 
                            placeholder="Enter activities..."
                            value={studentData.selfAssessment[term].findDifficult}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              selfAssessment: {
                                ...prev.selfAssessment,
                                [term]: {
                                  ...prev.selfAssessment[term],
                                  findDifficult: e.target.value
                                }
                              }
                            }))}
                            className="min-h-[100px]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            3. Activities that I enjoy doing with my friends
                          </label>
                          <Textarea 
                            placeholder="Enter activities..."
                            value={studentData.selfAssessment[term].enjoyWithFriends}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              selfAssessment: {
                                ...prev.selfAssessment,
                                [term]: {
                                  ...prev.selfAssessment[term],
                                  enjoyWithFriends: e.target.value
                                }
                              }
                            }))}
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>

            <TabsContent value="peer">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Peer Assessment</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Collaborative game/activity such as colouring together, playing a game, etc.
                  done in pairs/groups
                </p>

                <Tabs defaultValue="term1">
                  <TabsList className="grid w-[200px] grid-cols-2 mx-auto mb-6">
                    <TabsTrigger value="term1">Term 1</TabsTrigger>
                    <TabsTrigger value="term2">Term 2</TabsTrigger>
                  </TabsList>

                  {["term1", "term2"].map((term) => (
                    <TabsContent key={term} value={term}>
                      <div className="space-y-8">
                        {[
                          { key: 'helpsOthers', label: 'Helps in completing task/activity' },
                          { key: 'playsWithOthers', label: 'Likes to play with others' },
                          { key: 'sharesStationery', label: 'Shares stationery (crayons/glue/chalk) with classmates' }
                        ].map(({ key, label }) => (
                          <div key={key} className="grid grid-cols-2 gap-4 items-center">
                            <p className="font-medium text-gray-700">{label}</p>
                            <div className="flex gap-4 justify-center">
                              <Button
                                variant={studentData.peerAssessment[term][key] === "sad" ? "default" : "outline"}
                                onClick={() => setStudentData(prev => ({
                                  ...prev,
                                  peerAssessment: {
                                    ...prev.peerAssessment,
                                    [term]: {
                                      ...prev.peerAssessment[term],
                                      [key]: "sad"
                                    }
                                  }
                                }))}
                                className="w-12 h-12"
                              >
                                <Frown className={`h-6 w-6 ${
                                  studentData.peerAssessment[term][key] === "sad" 
                                    ? "text-white" 
                                    : "text-red-500"
                                }`} />
                              </Button>

                              <Button
                                variant={studentData.peerAssessment[term][key] === "neutral" ? "default" : "outline"}
                                onClick={() => setStudentData(prev => ({
                                  ...prev,
                                  peerAssessment: {
                                    ...prev.peerAssessment,
                                    [term]: {
                                      ...prev.peerAssessment[term],
                                      [key]: "neutral"
                                    }
                                  }
                                }))}
                                className="w-12 h-12"
                              >
                                <Meh className={`h-6 w-6 ${
                                  studentData.peerAssessment[term][key] === "neutral" 
                                    ? "text-white" 
                                    : "text-blue-500"
                                }`} />
                              </Button>

                              <Button
                                variant={studentData.peerAssessment[term][key] === "happy" ? "default" : "outline"}
                                onClick={() => setStudentData(prev => ({
                                  ...prev,
                                  peerAssessment: {
                                    ...prev.peerAssessment,
                                    [term]: {
                                      ...prev.peerAssessment[term],
                                      [key]: "happy"
                                    }
                                  }
                                }))}
                                className="w-12 h-12"
                              >
                                <Smile className={`h-6 w-6 ${
                                  studentData.peerAssessment[term][key] === "happy" 
                                    ? "text-white" 
                                    : "text-green-500"
                                }`} />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>

            <TabsContent value="teacher">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Learner's profile by the teacher</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Teacher must present a narrative summary of the child, highlighting the strengths,
                  challenges and suggestions for improvement.
                </p>

                <Textarea 
                  placeholder="Enter narrative summary..."
                  value={studentData.teacherNarrative}
                  onChange={(e) => setStudentData(prev => ({
                    ...prev,
                    teacherNarrative: e.target.value
                  }))}
                  className="min-h-[300px]"
                />
              </div>
            </TabsContent>

            <TabsContent value="parent">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Parent's Feedback</h3>

                <Tabs defaultValue="term1">
                  <TabsList className="grid w-[200px] grid-cols-2 mx-auto mb-6">
                    <TabsTrigger value="term1">Term 1</TabsTrigger>
                    <TabsTrigger value="term2">Term 2</TabsTrigger>
                  </TabsList>

                  {["term1", "term2"].map((term) => (
                    <TabsContent key={term} value={term}>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            My child enjoys participating in...
                          </label>
                          <Textarea 
                            placeholder="Enter activities..."
                            value={studentData.parentFeedback[term].enjoys}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              parentFeedback: {
                                ...prev.parentFeedback,
                                [term]: {
                                  ...prev.parentFeedback[term],
                                  enjoys: e.target.value
                                }
                              }
                            }))}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            My child can be supported for...
                          </label>
                          <Textarea 
                            placeholder="Enter support needed..."
                            value={studentData.parentFeedback[term].needsSupport}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              parentFeedback: {
                                ...prev.parentFeedback,
                                [term]: {
                                  ...prev.parentFeedback[term],
                                  needsSupport: e.target.value
                                }
                              }
                            }))}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            I would also like to share...
                          </label>
                          <Textarea 
                            placeholder="Additional comments..."
                            value={studentData.parentFeedback[term].additionalInfo}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              parentFeedback: {
                                ...prev.parentFeedback,
                                [term]: {
                                  ...prev.parentFeedback[term],
                                  additionalInfo: e.target.value
                                }
                              }
                            }))}
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`vaccination-${term}`}
                            checked={studentData.parentFeedback[term].vaccination}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              parentFeedback: {
                                ...prev.parentFeedback,
                                [term]: {
                                  ...prev.parentFeedback[term],
                                  vaccination: e.target.checked
                                }
                              }
                            }))}
                            className="w-4 h-4 rounded border-gray-300"
                          />
                          <label 
                            htmlFor={`vaccination-${term}`}
                            className="text-sm text-gray-700"
                          >
                            Have I completed age appropriate vaccination schedule for my child?
                          </label>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>

            <TabsContent value="portfolio">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Learner's Portfolio</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Paste pictures/display selected work done by student in various experiential and
                  inter-disciplinary tasks done in class.
                </p>

                <Tabs defaultValue="term1">
                  <TabsList className="grid w-[200px] grid-cols-2 mx-auto mb-6">
                    <TabsTrigger value="term1">Term 1</TabsTrigger>
                    <TabsTrigger value="term2">Term 2</TabsTrigger>
                  </TabsList>

                  {["term1", "term2"].map((term) => (
                    <TabsContent key={term} value={term}>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {studentData.portfolio[term].map((item, index) => (
                            <div 
                              key={index}
                              className="aspect-square border rounded-lg overflow-hidden"
                            >
                              <img
                                src={item}
                                alt={`Portfolio item ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                          <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <p className="text-sm text-gray-500">Add work sample</p>
                            </div>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    setStudentData(prev => ({
                                      ...prev,
                                      portfolio: {
                                        ...prev.portfolio,
                                        [term]: [...prev.portfolio[term], reader.result]
                                      }
                                    }));
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                              className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>

              {/* Signatures Section */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-6">Signature with date</h3>
                
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-medium text-gray-700">Term</div>
                  <div className="font-medium text-gray-700">Parent/Guardian</div>
                  <div className="font-medium text-gray-700">Class Teacher</div>
                  <div className="font-medium text-gray-700">Principal</div>

                  {["term1", "term2"].map((term) => (
                    <React.Fragment key={term}>
                      <div className="font-medium text-gray-600">
                        {term === "term1" ? "Term 1" : "Term 2"}
                      </div>
                      {["parent", "teacher", "principal"].map((type) => (
                        <div key={type} className="relative">
                          {studentData.signatures[term][type] ? (
                            <div className="relative">
                              <img
                                src={studentData.signatures[term][type]}
                                alt={`${type} signature`}
                                className="h-16 object-contain"
                              />
                              <button
                                onClick={() => setStudentData(prev => ({
                                  ...prev,
                                  signatures: {
                                    ...prev.signatures,
                                    [term]: {
                                      ...prev.signatures[term],
                                      [type]: null
                                    }
                                  }
                                }))}
                                className="absolute top-0 right-0 text-red-500 hover:text-red-700"
                              >
                                ×
                              </button>
                            </div>
                          ) : (
                            <>
                              <div className="border-2 border-dashed border-gray-300 rounded p-2 h-16 flex items-center justify-center">
                                <span className="text-sm text-gray-500">Click to add signature</span>
                              </div>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleSignatureUpload(term, type)}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                              />
                            </>
                          )}
                          <Input
                            type="date"
                            value={studentData.signatures[term].date}
                            onChange={(e) => setStudentData(prev => ({
                              ...prev,
                              signatures: {
                                ...prev.signatures,
                                [term]: {
                                  ...prev.signatures[term],
                                  date: e.target.value
                                }
                              }
                            }))}
                            className="mt-2"
                          />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <Button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              Save Progress Card
            </Button>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <Alert className="mt-4 bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">
                Progress card saved successfully!
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default App;