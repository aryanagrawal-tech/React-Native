import { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type RoomName = "Living Room" | "Bedroom" | "Kitchen";
type FanSpeed = "Low" | "Medium" | "High";

type RoomState = {
  lightOn: boolean;
  acOn: boolean;
  fanOn: boolean;
  tvOn: boolean;
  chimneyOn: boolean;
  temperature: number;
  fanSpeed: FanSpeed;
};

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState<RoomName>("Living Room");

  // Separate state for every room
  const [rooms, setRooms] = useState<Record<RoomName, RoomState>>({
    "Living Room": {
      lightOn: false,
      acOn: false,
      fanOn: false,
      tvOn: false,
      chimneyOn: false,
      temperature: 24,
      fanSpeed: "Medium",
    },

    Bedroom: {
      lightOn: false,
      acOn: false,
      fanOn: false,
      tvOn: false,
      chimneyOn: false,
      temperature: 24,
      fanSpeed: "Medium",
    },

    Kitchen: {
      lightOn: false,
      acOn: false,
      fanOn: false,
      tvOn: false,
      chimneyOn: false,
      temperature: 24,
      fanSpeed: "Medium",
    },
  });

  // Current room's state
  const currentRoom = rooms[selectedRoom];

  // Update current room
  const updateRoom = (changes: Partial<RoomState>) => {
    setRooms((previousRooms) => ({
      ...previousRooms,
      [selectedRoom]: {
        ...previousRooms[selectedRoom],
        ...changes,
      },
    }));
  };

  // Energy Usage for current room
  const energyUsage = useMemo(() => {
    let usage = 0;

    // Light
    if (currentRoom.lightOn) {
      usage += 0.1;
    }

    // AC
    if (currentRoom.acOn) {
      if (currentRoom.temperature <= 20) {
        usage += 0.7;
      } else if (currentRoom.temperature <= 24) {
        usage += 0.5;
      } else {
        usage += 0.4;
      }
    }

    // Fan
    if (currentRoom.fanOn) {
      if (currentRoom.fanSpeed === "Low") {
        usage += 0.1;
      } else if (currentRoom.fanSpeed === "Medium") {
        usage += 0.2;
      } else {
        usage += 0.3;
      }
    }

    // TV
    if (currentRoom.tvOn) {
      usage += 0.15;
    }

    // Chimney
    if (currentRoom.chimneyOn) {
      usage += 0.2;
    }

    return usage.toFixed(2);
  }, [currentRoom]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>🏠 Smart Home</Text>
          <Text style={styles.subtitle}>Dashboard</Text>
        </View>

        {/* Room Selection */}
        <Text style={styles.sectionTitle}>Select Room</Text>

        <View style={styles.roomContainer}>
          {/* Living Room */}
          <TouchableOpacity
            style={[
              styles.roomButton,
              selectedRoom === "Living Room" && styles.selectedRoom,
            ]}
            onPress={() => setSelectedRoom("Living Room")}
          >
            <Text style={styles.roomIcon}>🛋️</Text>

            <Text
              style={[
                styles.roomText,
                selectedRoom === "Living Room" && styles.selectedRoomText,
              ]}
            >
              Living Room
            </Text>
          </TouchableOpacity>

          {/* Bedroom */}
          <TouchableOpacity
            style={[
              styles.roomButton,
              selectedRoom === "Bedroom" && styles.selectedRoom,
            ]}
            onPress={() => setSelectedRoom("Bedroom")}
          >
            <Text style={styles.roomIcon}>🛏️</Text>

            <Text
              style={[
                styles.roomText,
                selectedRoom === "Bedroom" && styles.selectedRoomText,
              ]}
            >
              Bedroom
            </Text>
          </TouchableOpacity>

          {/* Kitchen */}
          <TouchableOpacity
            style={[
              styles.roomButton,
              selectedRoom === "Kitchen" && styles.selectedRoom,
            ]}
            onPress={() => setSelectedRoom("Kitchen")}
          >
            <Text style={styles.roomIcon}>🍳</Text>

            <Text
              style={[
                styles.roomText,
                selectedRoom === "Kitchen" && styles.selectedRoomText,
              ]}
            >
              Kitchen
            </Text>
          </TouchableOpacity>
        </View>

        {/* Current Room */}
        <View style={styles.currentRoom}>
          <Text style={styles.currentRoomText}>{selectedRoom}</Text>
        </View>

        {/* Devices */}
        <Text style={styles.sectionTitle}>Devices</Text>

        <View style={styles.deviceContainer}>
          {/* Light */}
          <TouchableOpacity
            style={[
              styles.deviceCard,
              currentRoom.lightOn && styles.deviceCardOn,
            ]}
            onPress={() =>
              updateRoom({
                lightOn: !currentRoom.lightOn,
              })
            }
          >
            <Text style={styles.icon}>💡</Text>

            <Text style={styles.deviceName}>Light</Text>

            <Text
              style={[
                styles.deviceStatus,
                currentRoom.lightOn && styles.deviceStatusOn,
              ]}
            >
              {currentRoom.lightOn ? "ON" : "OFF"}
            </Text>
          </TouchableOpacity>

          {/* AC */}
          <TouchableOpacity
            style={[styles.deviceCard, currentRoom.acOn && styles.deviceCardOn]}
            onPress={() =>
              updateRoom({
                acOn: !currentRoom.acOn,
              })
            }
          >
            <Text style={styles.icon}>❄️</Text>

            <Text style={styles.deviceName}>AC</Text>

            <Text
              style={[
                styles.deviceStatus,
                currentRoom.acOn && styles.deviceStatusOn,
              ]}
            >
              {currentRoom.acOn ? "ON" : "OFF"}
            </Text>
          </TouchableOpacity>

          {/* Fan */}
          <TouchableOpacity
            style={[
              styles.deviceCard,
              currentRoom.fanOn && styles.deviceCardOn,
            ]}
            onPress={() =>
              updateRoom({
                fanOn: !currentRoom.fanOn,
              })
            }
          >
            <Text style={styles.icon}>🌀</Text>

            <Text style={styles.deviceName}>Fan</Text>

            <Text
              style={[
                styles.deviceStatus,
                currentRoom.fanOn && styles.deviceStatusOn,
              ]}
            >
              {currentRoom.fanOn ? "ON" : "OFF"}
            </Text>
          </TouchableOpacity>

          {/* TV - Living Room & Bedroom */}
          {(selectedRoom === "Living Room" || selectedRoom === "Bedroom") && (
            <TouchableOpacity
              style={[
                styles.deviceCard,
                currentRoom.tvOn && styles.deviceCardOn,
              ]}
              onPress={() =>
                updateRoom({
                  tvOn: !currentRoom.tvOn,
                })
              }
            >
              <Text style={styles.icon}>📺</Text>

              <Text style={styles.deviceName}>TV</Text>

              <Text
                style={[
                  styles.deviceStatus,
                  currentRoom.tvOn && styles.deviceStatusOn,
                ]}
              >
                {currentRoom.tvOn ? "ON" : "OFF"}
              </Text>
            </TouchableOpacity>
          )}

          {/* Chimney - Kitchen */}
          {selectedRoom === "Kitchen" && (
            <TouchableOpacity
              style={[
                styles.deviceCard,
                currentRoom.chimneyOn && styles.deviceCardOn,
              ]}
              onPress={() =>
                updateRoom({
                  chimneyOn: !currentRoom.chimneyOn,
                })
              }
            >
              <Text style={styles.icon}>🏭</Text>

              <Text style={styles.deviceName}>Chimney</Text>

              <Text
                style={[
                  styles.deviceStatus,
                  currentRoom.chimneyOn && styles.deviceStatusOn,
                ]}
              >
                {currentRoom.chimneyOn ? "ON" : "OFF"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* AC Temperature - Only when AC is ON */}
        {currentRoom.acOn && (
          <View style={styles.controlBox}>
            <Text style={styles.controlTitle}>🌡️ AC Temperature</Text>

            <Text style={styles.temperature}>{currentRoom.temperature}°C</Text>

            <View style={styles.temperatureButtons}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() =>
                  updateRoom({
                    temperature: Math.max(16, currentRoom.temperature - 1),
                  })
                }
              >
                <Text style={styles.controlButtonText}>−</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.controlButton}
                onPress={() =>
                  updateRoom({
                    temperature: Math.min(30, currentRoom.temperature + 1),
                  })
                }
              >
                <Text style={styles.controlButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.rangeText}>Range: 16°C - 30°C</Text>
          </View>
        )}

        {/* Fan Speed - Only when Fan is ON */}
        {currentRoom.fanOn && (
          <View style={styles.controlBox}>
            <Text style={styles.controlTitle}>🌀 Fan Speed</Text>

            <View style={styles.speedContainer}>
              {(["Low", "Medium", "High"] as const).map((speed) => (
                <TouchableOpacity
                  key={speed}
                  style={[
                    styles.speedButton,
                    currentRoom.fanSpeed === speed && styles.selectedSpeed,
                  ]}
                  onPress={() =>
                    updateRoom({
                      fanSpeed: speed,
                    })
                  }
                >
                  <Text
                    style={[
                      styles.speedText,
                      currentRoom.fanSpeed === speed &&
                        styles.selectedSpeedText,
                    ]}
                  >
                    {speed}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Energy Usage */}
        <View style={styles.energyCard}>
          <Text style={styles.energyTitle}>⚡ Energy Usage</Text>

          <Text style={styles.energyValue}>{energyUsage} kW</Text>

          <Text style={styles.energySubtitle}>Current estimated usage</Text>
        </View>

        {/* Security */}
        <View style={styles.securityCard}>
          <Text style={styles.securityIcon}>🔒</Text>

          <View>
            <Text style={styles.securityTitle}>Home Security</Text>

            <Text style={styles.securityStatus}>🟢 System Secure</Text>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },

  header: {
    padding: 20,
    paddingTop: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1f2937",
  },

  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 12,
  },

  roomContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    gap: 8,
  },

  roomButton: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  selectedRoom: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },

  roomIcon: {
    fontSize: 25,
    marginBottom: 5,
  },

  roomText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
    textAlign: "center",
  },

  selectedRoomText: {
    color: "#ffffff",
  },

  currentRoom: {
    margin: 20,
    marginBottom: 5,
    backgroundColor: "#e8f0ff",
    padding: 15,
    borderRadius: 15,
  },

  currentRoomText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2563eb",
    textAlign: "center",
  },

  deviceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    gap: 12,
  },

  deviceCard: {
    width: "47%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  deviceCardOn: {
    borderColor: "#2563eb",
    backgroundColor: "#eff6ff",
  },

  icon: {
    fontSize: 40,
    marginBottom: 10,
  },

  deviceName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1f2937",
  },

  deviceStatus: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "bold",
    color: "#9ca3af",
  },

  deviceStatusOn: {
    color: "#2563eb",
  },

  controlBox: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  controlTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
  },

  temperature: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#2563eb",
    textAlign: "center",
    marginVertical: 15,
  },

  temperatureButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },

  controlButton: {
    width: 55,
    height: 45,
    backgroundColor: "#2563eb",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  controlButtonText: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },

  rangeText: {
    textAlign: "center",
    color: "#6b7280",
    marginTop: 12,
  },

  speedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  speedButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 10,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
  },

  selectedSpeed: {
    backgroundColor: "#2563eb",
  },

  speedText: {
    fontWeight: "600",
    color: "#374151",
  },

  selectedSpeedText: {
    color: "#ffffff",
  },

  energyCard: {
    margin: 20,
    marginBottom: 0,
    padding: 25,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  energyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
  },

  energyValue: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#2563eb",
    marginTop: 10,
  },

  energySubtitle: {
    color: "#6b7280",
    marginTop: 5,
  },

  securityCard: {
    margin: 20,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  securityIcon: {
    fontSize: 35,
  },

  securityTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1f2937",
  },

  securityStatus: {
    marginTop: 5,
    color: "#16a34a",
    fontWeight: "600",
  },
});
